const express = require('express');
const path = require('path');

const app = express();

app.set('trust proxy', 1);

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} ${ms}ms`);
  });
  next();
});

const staticDir = path.join(__dirname, 'public');
const staticOptions = process.env.NODE_ENV === 'production'
  ? { maxAge: '1d', etag: true, lastModified: true }
  : {};
app.use(express.static(staticDir, staticOptions));

app.get('/api/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  if (res.headersSent) return;
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
