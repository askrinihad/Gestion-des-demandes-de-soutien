const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DevisValidateSchema = new Schema({
  idDemandeSoutien: {
    type: String,
    required: true,
  },
 
  colonnes:{
    type: Object,
    required: true,
  },
});

module.exports = DevisValidation = mongoose.model("devisValidation", DevisValidateSchema);
