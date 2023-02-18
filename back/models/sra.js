const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SraSchema = new Schema({
  code: {
    type: Number,
    required: true,
  },
  objectifs: {
    type: String,
    required: true,
  },
  concept: {
    type: String,
    required: true,
  },
  capacite: {
    type: String,
    required: true,
  },
  facilitateur: {
    type: String,
    required: true,
  },
});

module.exports = Sra = mongoose.model("sra", SraSchema);
