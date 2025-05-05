const express = require("express");
const router = express.Router();
const {
  getAllClientes,
  updateCliente,
  createCliente,
  deleteCliente,
} = require("../controllers/ClienteController");

router.get("/cliente", getAllClientes);
router.post("/cliente", createCliente);
router.put("/cliente/:id", updateCliente);
router.delete("/cliente/:id", deleteCliente);

module.exports = router;
