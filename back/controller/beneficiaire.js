const Beneficiaire = require("../models/beneficiaire");

class beneficiaireController {
  static async getListBeneficiare(req, res) {
    try {
      const listBeneficiare = await Beneficiaire.find();
      console.log(listBeneficiare);
      res.json(listBeneficiare);
    } catch (err) {
      res.json({ message: err });
    }
  }
  //////////////////////////////////////////
  static async supprimerBeneficiaire(req, res) {
    const beneficiaire = await Beneficiaire.findById(req.params.id);
    if (beneficiaire) {
      beneficiaire
        .remove()
        .then(() => res.json({ message: "Le beneficiaire est supprimé" }))
        .catch((err) => {
          res.send({ message: err });
        });
    } else {
      res.json({ message: "le beneficiaire n'existe pas" });
    }
  }
  //////////////////////////////////////////
  static async ajouterBeneficiaire(req, res) {
    console.log(req.body);
    const beneficiaire = new Beneficiaire({
      nomSociete: req.body.nomSociete,
      typeB: req.body.typeB,
      nomGerant: req.body.nomGerant,
      qualite: req.body.qualite,
      titre: req.body.titre,
      adresse: req.body.adresse,
      pointFocal: req.body.pointFocal,
      significationNomSociete: req.body.significationNomSociete,
      anneeRef: req.body.anneeRef,
      FormeJuridique: req.body.FormeJuridique,
      SIRET: req.body.SIRET,
      immatriculation: req.body.immatriculation,
      domiciliationPai: req.body.domiciliationPai,
      codeBanque: req.body.codeBanque,
      codeGuichet: req.body.codeGuichet,
      numCompte: req.body.numCompte,
      cleRib: req.body.cleRib,
      iban: req.body.iban,
      structure: req.body.structure,
      bic: req.body.bic,
      implantations: req.body.implantations,
    });
    console.log(beneficiaire);
    beneficiaire
      .save()
      .then(() => res.json({ message: "Beneficiaire ajouté" }))
      .catch((err) => {
        console.log(err);
        res.json({ message: "echec de sauvegarde" });
      });
  }
  ///////////////////////////////
  static async modifierBeneficiaire(req, res) {
    console.log(req.params.id);
    const beneficiaire = await Beneficiaire.updateOne(
      { _id: req.params.id },
      {
        $set: {
          nomSociete: req.body.nomSociete,
          typeB: req.body.typeB,
          nomGerant: req.body.nomGerant,
          qualite: req.body.qualite,
          titre: req.body.titre,
          adresse: req.body.adresse,
          pointFocal: req.body.pointFocal,
          significationNomSociete: req.body.significationNomSociete,
          anneeRef: req.body.anneeRef,
          FormeJuridique: req.body.FormeJuridique,
          SIRET: req.body.SIRET,
          immatriculation: req.body.immatriculation,
          domiciliationPai: req.body.domiciliationPai,
          codeBanque: req.body.codeBanque,
          codeGuichet: req.body.codeGuichet,
          numCompte: req.body.numCompte,
          cleRib: req.body.cleRib,
          iban: req.body.iban,
          structure: req.body.structure,
          bic: req.body.bic,
          implantations: req.body.implantations,
        },
      }
    )
      .then(() => res.send({ message: "Le beneficiaire a été modifié" }))
      .catch((err) => {
        res.send({ message: "Echec de modification, essayer une autre fois!" });
      });
  }
}
module.exports = beneficiaireController;
