// index.js
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const productsRoute = require("./routes/productsRoute");
const app = express();

dotenv.config();
const port = process.env.PORT;

connectDB();

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Backend API");
});
app.use("/api", produtoRoute);
app.use("/api", clienteRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
