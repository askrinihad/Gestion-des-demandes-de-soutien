const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AgentSchema = new Schema({
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  fonction: {
    type: String,
    required: true,
  },
  faxNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },

  signature: {
    type: String,
    required: true,
  },
});

module.exports = Agent = mongoose.model("agent", AgentSchema);
