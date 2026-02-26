import "dotenv/config";
import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

const PORT = Number(process.env.PORT || 4000);
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_change_me";
const ADMIN_EMAIL = String(process.env.ADMIN_EMAIL || "admin@imperio.com").toLowerCase();
const ADMIN_PASSWORD = String(process.env.ADMIN_PASSWORD || "Nub@2026");

app.use(cors({ origin: "*", allowedHeaders: ["Content-Type", "Authorization"] }));
app.use(express.json({ limit: "2mb" }));

function signToken(user) {
  return jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: "30d" });
}

function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden" });
  }
  return next();
}

async function ensureAdminUser() {
  const existing = await prisma.user.findUnique({ where: { email: ADMIN_EMAIL } });
  if (existing) return;
  const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
  await prisma.user.create({
    data: { email: ADMIN_EMAIL, password: hash, role: "admin" }
  });
}

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/auth/register", async (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase();
  const password = String(req.body?.password || "");
  if (!email || !password || password.length < 6) {
    return res.status(400).json({ error: "Email e senha validos sao obrigatorios." });
  }
  if (email === ADMIN_EMAIL) {
    return res.status(403).json({ error: "Email reservado para admin." });
  }
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(409).json({ error: "Email ja cadastrado." });
  const hash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hash, role: "player" } });
  const token = signToken(user);
  return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});

app.post("/api/auth/login", async (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase();
  const password = String(req.body?.password || "");
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ error: "Credenciais invalidas." });
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ error: "Credenciais invalidas." });
  const token = signToken(user);
  return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});

app.get("/api/auth/me", auth, async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: req.user.sub } });
  if (!user) return res.status(404).json({ error: "Usuario nao encontrado." });
  return res.json({ id: user.id, email: user.email, role: user.role });
});

app.get("/api/save", auth, async (req, res) => {
  const save = await prisma.save.findUnique({ where: { userId: req.user.sub } });
  if (!save) return res.status(404).json({ error: "Sem save." });
  return res.json({ data: save.data, meta: save });
});

app.put("/api/save", auth, async (req, res) => {
  const data = req.body?.data;
  if (!data || typeof data !== "object") return res.status(400).json({ error: "Save invalido." });
  const meta = req.body?.meta || {};
  const money = Number(meta.money ?? data.money ?? 0) || 0;
  const patrimonio = Number(meta.patrimonio ?? 0) || 0;
  const level = Number(meta.level ?? data.level ?? 1) || 1;
  const prestige = Number(meta.prestige ?? data.prestigePoints ?? 0) || 0;
  const year = Number(meta.year ?? data.year ?? 1) || 1;
  const month = Number(meta.month ?? data.month ?? 1) || 1;
  const playerName = String(meta.playerName ?? data.player?.nome ?? "");

  const save = await prisma.save.upsert({
    where: { userId: req.user.sub },
    update: { data, money, patrimonio, level, prestige, year, month, playerName },
    create: { userId: req.user.sub, data, money, patrimonio, level, prestige, year, month, playerName }
  });
  return res.json({ ok: true, meta: save });
});

app.get("/api/ranking/top", async (req, res) => {
  const limit = Math.min(50, Math.max(1, Number(req.query?.limit || 20)));
  const saves = await prisma.save.findMany({
    orderBy: { patrimonio: "desc" },
    take: limit
  });
  return res.json({
    list: saves.map((s) => ({
      userId: s.userId,
      playerName: s.playerName || "Jogador",
      patrimonio: s.patrimonio,
      money: s.money,
      level: s.level,
      prestige: s.prestige,
      year: s.year,
      month: s.month,
      updatedAt: s.updatedAt
    }))
  });
});

app.get("/api/admin/users", auth, requireAdmin, async (req, res) => {
  const search = String(req.query?.search || "").trim().toLowerCase();
  const users = await prisma.user.findMany({
    where: search ? { email: { contains: search } } : undefined,
    include: { save: true },
    take: 50,
    orderBy: { createdAt: "desc" }
  });
  return res.json({
    users: users.map((u) => ({
      id: u.id,
      email: u.email,
      role: u.role,
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
      save: u.save
        ? {
          money: u.save.money,
          patrimonio: u.save.patrimonio,
          level: u.save.level,
          prestige: u.save.prestige,
          year: u.save.year,
          month: u.save.month,
          playerName: u.save.playerName,
          updatedAt: u.save.updatedAt
        }
        : null
    }))
  });
});

app.get("/api/admin/users/:id", auth, requireAdmin, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: String(req.params.id) },
    include: { save: true }
  });
  if (!user) return res.status(404).json({ error: "Usuario nao encontrado." });
  return res.json({
    id: user.id,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    save: user.save
  });
});

app.patch("/api/admin/users/:id/money", auth, requireAdmin, async (req, res) => {
  const mode = String(req.body?.mode || "add");
  const amount = Number(req.body?.amount || 0);
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ error: "Valor invalido." });
  }
  const save = await prisma.save.findUnique({ where: { userId: String(req.params.id) } });
  if (!save) return res.status(404).json({ error: "Usuario sem save." });
  const currentMoney = Number(save.money || 0);
  const nextMoney = mode === "set"
    ? amount
    : mode === "remove"
      ? Math.max(0, currentMoney - amount)
      : currentMoney + amount;

  const nextData = typeof save.data === "object" && save.data ? { ...save.data, money: nextMoney } : { money: nextMoney };
  const updated = await prisma.save.update({
    where: { userId: String(req.params.id) },
    data: { data: nextData, money: nextMoney }
  });
  return res.json({ ok: true, money: updated.money });
});

app.put("/api/admin/users/:id/save", auth, requireAdmin, async (req, res) => {
  const data = req.body?.data;
  if (!data || typeof data !== "object") return res.status(400).json({ error: "Save invalido." });
  const meta = req.body?.meta || {};
  const money = Number(meta.money ?? data.money ?? 0) || 0;
  const patrimonio = Number(meta.patrimonio ?? 0) || 0;
  const level = Number(meta.level ?? data.level ?? 1) || 1;
  const prestige = Number(meta.prestige ?? data.prestigePoints ?? 0) || 0;
  const year = Number(meta.year ?? data.year ?? 1) || 1;
  const month = Number(meta.month ?? data.month ?? 1) || 1;
  const playerName = String(meta.playerName ?? data.player?.nome ?? "");

  const save = await prisma.save.upsert({
    where: { userId: String(req.params.id) },
    update: { data, money, patrimonio, level, prestige, year, month, playerName },
    create: { userId: String(req.params.id), data, money, patrimonio, level, prestige, year, month, playerName }
  });
  return res.json({ ok: true, meta: save });
});

app.listen(PORT, async () => {
  await ensureAdminUser();
  console.log(`API on http://localhost:${PORT}`);
});
