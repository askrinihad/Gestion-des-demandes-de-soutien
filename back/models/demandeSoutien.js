const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DemandeSoutienSchema = new Schema({
  agentChargeDossier: {
    type: String,
    required: true,
  },
  nomProjet: {
    type: String,
    required: true,
  },
  acoProjet: {
    type: String,
    required: true,
  },
  refConvention: {
    type: String,
    required: true,
  },
  anneeGestion: {
    type: String,
    required: true,
  },

  typeSoutien: {
    type: String,
    required: true,
  },

  programme: {
    type: String,
    required: true,
  },

  domaine: {
    type: String,
    required: true,
  },

  nomEncloture: {
    type: String,
    required: true,
  },

  codeActivite: {
    type: String,
    required: true,
  },
  serviceExe: {
    type: String,
    required: true,
  },
  numEngagement: {
    type: String,
    required: true,
  },
  domaineFonct: {
    type: String,
    required: true,
  },
  cout: {
    type: String,
    required: true,
  },

  ddsTF: {
    type: String,
    required: true,
  },

  ddsTC: {
    type: String,
    required: true,
  },

  dureeConvention: {
    type: String,
    required: true,
  },

  T0: {
    type: String,
    required: true,
  },

  T1: {
    type: String,
    required: true,
  },

  T2: {
    type: String,
    required: true,
  },

  T3: {
    type: String,
    required: true,
  },

  finTF: {
    type: String,
    required: true,
  },

  finTC: {
    type: String,
    required: true,
  },

  lignes:{
    type: Object,
    required: true,
  },
});

module.exports = Agent = mongoose.model("demandeSoutien", DemandeSoutienSchema);
