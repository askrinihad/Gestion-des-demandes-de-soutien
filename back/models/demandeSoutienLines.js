const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DemandeSoutienLinesSchema = new Schema({
  demandeSoutien: {
    type: String,
    required: true,
  },
  elementFinance: {
    type: String,
    required: true,
  },
  instruction: {
    type: String,
    required: true,
  },
  completudeDossier: {
    type: String,
    required: true,
  },
  
});

module.exports = Agent = mongoose.model("demandeSoutienLine", DemandeSoutienLinesSchema);
