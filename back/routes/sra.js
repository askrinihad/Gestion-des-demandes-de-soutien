const express = require("express");
const router = express.Router();
const controller = require("../controller/sra");
router.post("/ajouter", controller.ajouterSra);
module.exports = router;
