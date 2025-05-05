const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  altura: {
    type: String,
    required: true,
  },
  id: {
    type: int,
    required: true,
  },
});

const ClienteModel = model("Cliente", ClienteSchema);

module.exports = ClienteModel;
