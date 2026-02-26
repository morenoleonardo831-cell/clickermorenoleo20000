# Deploy no Render (API + Postgres)

## 1) Criar banco Postgres
1. No Render: `New` → `PostgreSQL`.
2. Defina nome (ex.: `imperio-clicker-db`).
3. Copie a `Internal Database URL` (ou `External` se necessário).

## 2) Subir o backend
1. No Render: `New` → `Web Service`.
2. Aponte para o repositório que contém `server/`.
3. `Root Directory`: `server`
4. `Build Command`:
   ```
   npm install && npx prisma generate && npx prisma migrate deploy
   ```
5. `Start Command`:
   ```
   npm run start
   ```
6. Adicione as env vars:
   - `DATABASE_URL` = URL do Postgres
   - `JWT_SECRET` = (ex.: uma string aleatória longa)
   - `ADMIN_EMAIL` = `admin@imperio.com`
   - `ADMIN_PASSWORD` = `Nub@2026`

## 3) Configurar o GitHub Pages
No `index-github.html`, antes do script principal:
```html
<script>
  window.CLOUD_API_BASE = "https://SUA_API.onrender.com";
</script>
```

## 4) Testar
1. Abra o site.
2. Crie conta em “Conta online”.
3. Salve na nuvem.
4. Recarregue e carregue da nuvem.
5. No painel admin, faça login com o admin e teste editar dinheiro.

