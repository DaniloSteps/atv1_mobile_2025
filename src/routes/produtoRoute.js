const express = require("express");
const router = express.Router();
const {
  getAllProdutos,
  updateProduto,
  createProduto,
  deleteProduto,
} = require("../controllers/produtoController");

router.get("/produto", getAllProdutos);
router.post("/produto", createProduto);
router.put("/produto/:id", updateProduto);
router.delete("/produto/:id", deleteProduto);

module.exports = router;
