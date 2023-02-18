const express = require("express");
const router = express.Router();
const controller = require("../controller/devisValidation");
const upload = require("../middleware/upload");
router.post("/ajouter", controller.ajouterDevis);
module.exports = router;