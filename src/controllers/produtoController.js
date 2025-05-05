// controllers/productController.js
const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      success: true,
      products: allProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nome, preco, descricao } = req.body;
    const newProduct = new Product({ nome, preco, descricao});
    await newProduct.save();
    res.status(201).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, preco, descricao } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { nome, preco, descricao },
      { new: true }
    );
    res.status(200).json({
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
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
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
