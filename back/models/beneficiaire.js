const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BeneficiaireSchema = new Schema({
  nomSociete: {
    type: String,
    required: true,
  },
  typeB: {
    type: String,
    required: true,
  },
  nomGerant: {
    type: String,
    required: true,
  },
  qualite: {
    type: String,
    required: true,
  },
  titre: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  pointFocal: {
    type: String,
    required: true,
  },
  significationNomSociete: {
    type: String,
    required: true,
  },
  anneeRef: {
    type: Number,
    required: true,
  },
  FormeJuridique: {
    type: String,
    required: true,
  },
  SIRET: {
    type: Number,
    required: true,
  },
  immatriculation: {
    type: String,
    required: true,
  },
  domiciliationPai: {
    type: String,
    required: true,
  },
  codeBanque: {
    type: Number,
    required: true,
  },
  codeGuichet: {
    type: Number,
    required: true,
  },
  numCompte: {
    type: Number,
    required: true,
  },
  cleRib: {
    type: Number,
    required: true,
  },
  iban: {
    type: String,
    required: true,
  },
  bic: {
    type: String,
    required: true,
  },
  structure: {
    type: String,
    required: true,
  },
  implantations: {
    type: String,
    required: true,
  },
});

module.exports = Beneficiaire = mongoose.model(
  "beneficiaire",
  BeneficiaireSchema
);
