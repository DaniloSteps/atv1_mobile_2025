const { Schema, model } = require("mongoose");

const ProdutoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  id: {
    type: int,
    required: true,
  }
});

const ProdutoModel = model("Produto", ProdutoSchema);

module.exports = ProdutoModel;
