
const DemandeSoutien = require("../models/demandeSoutien");
const validationDevis = require("../models/devisValidate");

class ValidationDevisController {
  static async ajouterDevis(req, res) {
    console.log("heeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrr");
    console.log(req.body);

    const demande = new validationDevis({
      idDemandeSoutien: req.body.idDemandeSoutien,
      colonnes: req.body.colonnes,
    });

    demande
      .save()
      .then(() => res.json({ message: "Devis Ajouté" }))
      .catch((err) => {
        res.json({ message: "echec de sauvegarde" });
      });
  }
  /////////////////////////////////////////////////

  // static async  getDemandeSoutien(req, res){
  //     try {
  //       const listdemande = await DemandeSoutien.find();
  //       console.log(listdemande);
  //       res.json(listdemande);
  //     } catch (err) {
  //       res.json({ message: err });
  //     }
  //   }
}
module.exports = ValidationDevisController;
