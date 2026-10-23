import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/salud", (_req, res) => {
  res.json({ estado: "ok", mensaje: "API funcionando" });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});