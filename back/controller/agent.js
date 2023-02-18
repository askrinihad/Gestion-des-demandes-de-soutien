const Agent = require("../models/agent");

class agentController {
  static async ajouterAgent(req, res) {
    const agent = new Agent({
      prenom: req.body.prenom,
      nom: req.body.nom,
      fonction: req.body.fonction,
      faxNumber: req.body.faxNumber,
      phoneNumber: req.body.phoneNumber,
      signature: req.file.path,
    });

    agent
      .save()
      .then(() => res.json({ message: "Agent ajouté" }))
      .catch((err) => {
        res.json({ message: "echec de sauvegarde" });
      });
  }
  /////////////////////////////////////////////////
  static async supprimerAgent(req, res) {
    const agent = await Agent.findById(req.params.id);
    if (agent) {
      agent
        .remove()
        .then(() => res.json({ message: "l'agent est supprimé" }))
        .catch((err) => {
          res.send({ message: err });
        });
    } else {
      res.json({ message: "l'agent n'existe pas" });
    }
  }
  //////////////////////////////:
  static async getListAgent(req, res) {
    try {
      const listAgent = await Agent.find();
      console.log(listAgent);
      res.json(listAgent);
    } catch (err) {
      res.json({ message: err });
    }
  }
  /////////////////////////////
  static async modifierAgent(req, res) {
    console.log(req.params.id);
    const agent = await Agent.updateOne(
      { _id: req.params.id },
      {
        $set: {
          prenom: req.body.prenom,
          nom: req.body.nom,
          fonction: req.body.fonction,
          faxNumber: req.body.faxNumber,
          phoneNumber: req.body.phoneNumber,
        },
      }
    )
      .then(() => res.send({ message: "L'agent a été modifié" }))
      .catch((err) => {
        res.send({ message: "Echec de modification, essayer une autre fois!" });
      });
  }
    //////////////////////////////:
    static async getAgentById(req, res) {
      try {
        const listAgent = await Agent.find({_id:req.params.id});
        console.log(listAgent);
        res.json(listAgent);
      } catch (err) {
        res.json({ message: err });
      }
    }
}
module.exports = agentController;
