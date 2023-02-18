const Sra = require("../models/sra");

class sraController {
  static async ajouterSra(req, res) {
    const sra = new Sra({
      code: req.body.code,
      objectifs: req.body.objectifs,
      concept: req.body.concept,
      capacite: req.body.capacite,
      facilitateur: req.body.facilitateur,
    });

    sra
      .save()
      .then(() => res.json({ message: "SRA ajouté" }))
      .catch((err) => {
        res.json({ message: "echec de sauvegarde" });
      });
  }
}
module.exports = sraController;
