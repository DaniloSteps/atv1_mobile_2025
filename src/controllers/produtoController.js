const Produto = require("../models/produtoModel");

const getAllProdutos = async (req, res) => {
  try {
    const allProdutos = await Produto.find();
    res.status(200).json({
      success: true,
      Produtos: allProdutos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const createProduto = async (req, res) => {
  try {
    const { nome, preco, descricao } = req.body;
    const newProduto = new Produto({ nome, preco, descricao});
    await newProduto.save();
    res.status(201).json({
      success: true,
      Produto: newProduto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const updateProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, preco, descricao } = req.body;
    const updatedProduto = await Produto.findByIdAndUpdate(
      id,
      { nome, preco, descricao },
      { new: true }
    );
    res.status(200).json({
      success: true,
      Produto: updatedProduto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const deleteProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduto = await Produto.findByIdAndDelete(id);
    if (!deletedProduto) {
      return res.status(404).json({ message: "Produto não encontrado." });
    }
    res.status(200).json({
      success: true,
      message: "Produto deletado com sucesso.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

module.exports = {
  getAllProdutos,
  createProduto,
  updateProduto,
  deleteProduto,
};
