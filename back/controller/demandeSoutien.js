const DemandeSoutien = require("../models/demandeSoutien");

class demandeSoutienController {
  static async ajouterDemande(req, res) {
    console.log("heeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrr");
    console.log(req.body);
    var i;
    var lines = [];
    for (i = 0; i < req.body.lines.length; i++) {
      var line = req.body.lines[i];
      lines = [
        ...lines,
        {
          demandeSoutien: {
            ref: line[0],
            date: line[1],
            ar: line[2],
            pointFocal: line[3],
          },

          elementsFinancier: {
            numPoste: line[4],
            TFTC: line[5],
            partenaire: line[6],
            activInitiale: line[7],
            activRetenue: line[8],
            evolution: line[9],
            taux: line[10],
            soutien: line[11],
            delais: line[12],
            avance: line[13],
          },
          Instruction: {
            ref: line[14],
            livraisonDT: line[15],
            dateAudit: line[16],
          },
          ComplétudeDossier: {
            statut: line[17],
            date: line[18],
          },
        },
      ];
    }
    const demande = new DemandeSoutien({
      agentChargeDossier: req.body.agentChargeDossier,
      nomProjet: req.body.nomProjet,
      acoProjet: req.body.acoProjet,
      refConvention: req.body.refConvention,
      anneeGestion: req.body.anneeGestion,
      typeSoutien: req.body.typeSoutien,
      programme: req.body.programme,
      domaine: req.body.domaine,
      nomEncloture: req.body.nomEncloture,
      codeActivite: req.body.codeActivite,
      serviceExe: req.body.serviceExe,
      numEngagement: req.body.numEngagement,
      domaineFonct: req.body.domaineFonct,
      cout: req.body.cout,
      ddsTF: req.body.ddsTF,
      ddsTC: req.body.ddsTC,
      dureeConvention: req.body.dureeConvention,
      T0: req.body.T0,
      T1: req.body.T1,
      T2: req.body.T2,
      T3: req.body.T3,
      finTF: req.body.finTF,
      finTC: req.body.finTC,
      lignes: lines,
    });

    demande.save()
    .then(() => res.json({ message: "Demande Ajoutée" }))
    .catch((err) => {
      res.json({ message: "echec de sauvegarde" });
    });
  }
  /////////////////////////////////////////////////

static async  getDemandeSoutien(req, res){
    try {
      const listdemande = await DemandeSoutien.find();
      console.log(listdemande);
      res.json(listdemande);
    } catch (err) {
      res.json({ message: err });
    }
  }
}
module.exports = demandeSoutienController;
