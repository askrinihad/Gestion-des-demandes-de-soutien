const express = require("express");
const router = express.Router();
const controller = require("../controller/demandeSoutien");
const upload = require("../middleware/upload");
router.post("/ajouter", controller.ajouterDemande);
router.get("/getDemandeSoutien", controller.getDemandeSoutien);
module.exports = router;
