const Cliente = require("../models/clienteModel");

const getAllClientes = async (req, res) => {
  try {
    const allClientes = await Cliente.find();
    res.status(200).json({
      success: true,
      Clientes: allClientes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const createCliente = async (req, res) => {
  try {
    const { nome, altura, id } = req.body;
    const newCliente = new Cliente({ nome, altura, id});
    await newCliente.save();
    res.status(201).json({
      success: true,
      Cliente: newCliente,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, altura, id } = req.body;
    const updatedCliente = await Cliente.findByIdAndUpdate(
      id,
      { nome, altura, id },
      { new: true }
    );
    res.status(200).json({
      success: true,
      Cliente: updatedCliente,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCliente = await Cliente.findByIdAndDelete(id);
    if (!deletedCliente) {
      return res.status(404).json({ message: "Cliente não encontrado." });
    }
    res.status(200).json({
      success: true,
      message: "Cliente deletado com sucesso.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor...",
    });
  }
};

module.exports = {
  getAllClientes,
  createCliente,
  updateCliente,
  deleteCliente,
};
