const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files first
app.use(express.static(path.join(__dirname, "public")));

// ✅ Health check (and any other API routes) before the catch-all
app.get("/api/healthz", (req, res) => {
  res.status(200).json({ "if you see this": "server is healthy" });
});

// Catch-all for frontend routes (MUST be last)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on ${PORT}`);
});
