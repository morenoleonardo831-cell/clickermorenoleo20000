const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const net = require("net");

const root = __dirname;
const preferredPorts = [8080, 5500, 3000, 5173];

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function getFreePort(candidates) {
  return new Promise((resolve, reject) => {
    const tryNext = (i) => {
      if (i >= candidates.length) {
        reject(new Error("Nenhuma porta livre encontrada."));
        return;
      }
      const port = candidates[i];
      const tester = net.createServer();
      tester.once("error", () => tryNext(i + 1));
      tester.once("listening", () => {
        tester.close(() => resolve(port));
      });
      tester.listen(port, "127.0.0.1");
    };
    tryNext(0);
  });
}

function openBrowser(url) {
  try {
    const cmd = process.platform === "win32"
      ? `start "" "${url}"`
      : process.platform === "darwin"
        ? `open "${url}"`
        : `xdg-open "${url}"`;
    exec(cmd, () => {});
  } catch {
    // ignore browser auto-open failures; server must keep running
  }
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const rel = decoded === "/" ? "/index.html" : decoded;
  const file = path.normalize(path.join(root, rel));
  if (!file.startsWith(root)) return null;
  return file;
}

async function main() {
  const port = await getFreePort(preferredPorts);
  const url = `http://localhost:${port}/index.html`;

  const server = http.createServer((req, res) => {
    const file = safePath(req.url || "/");
    if (!file) {
      res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Bad Request");
      return;
    }

    fs.stat(file, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("404 Not Found");
        return;
      }

      const ext = path.extname(file).toLowerCase();
      const contentType = mime[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      fs.createReadStream(file).pipe(res);
    });
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`Servidor ativo em http://localhost:${port}/`);
    console.log("Abrindo o jogo no navegador...");
    console.log("Para encerrar o servidor, pressione Ctrl+C.");
    openBrowser(url);
  });
}

main().catch((err) => {
  console.error("Erro ao iniciar servidor local:", err.message);
  process.exit(1);
});
