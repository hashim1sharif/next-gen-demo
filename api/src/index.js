// api/src/index.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "./db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// ---------- API ENDPOINTS ----------

// Health check (also verifies DB connectivity)
app.get("/healthz", async (_req, res) => {
  try {
    await pool.query("select 1");
    res.json({
      ok: true,
      message: "If you see this, it works — welcome, Hashim!",
      service: "NextGen API",
      status: "healthy",
      timestamp: new Date().toISOString()
    });
  } catch (e) {
    res.status(500).json({
      ok: false,
      message: "Database connection failed, please check configuration.",
      error: e.message
    });
  }
});

// List todos
app.get("/api/todos", async (_req, res) => {
  const { rows } = await pool.query(
    "select * from todos order by id desc limit 100"
  );
  res.json(rows);
});

// Create todo
app.post("/api/todos", async (req, res) => {
  const { title } = req.body ?? {};
  if (!title) return res.status(400).json({ error: "title required" });

  const { rows } = await pool.query(
    "insert into todos (title) values ($1) returning *",
    [title]
  );
  res.status(201).json(rows[0]);
});

// ---------- SERVE YOUR FRONTEND ----------

// webRoot points to your project root where index.html lives
const webRoot = path.join(__dirname, "..", "..");

// Serve static files: index.html, style.css, app.js, Images/, logo/
app.use(express.static(webRoot));

// For any unknown route, send back index.html (so direct URL entries still work)
app.get("*", (_req, res) => res.sendFile(path.join(webRoot, "index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Web + API running on :${port}`));
