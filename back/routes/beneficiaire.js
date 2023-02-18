const express = require("express");
const router = express.Router();
const controller = require("../controller/beneficiaire");
router.post("/ajouter", controller.ajouterBeneficiaire);
router.get("/getList", controller.getListBeneficiare);
router.put("/modifierBeneficiaire/:id", controller.modifierBeneficiaire);
router.delete("/supprimerBeneficiaire/:id", controller.supprimerBeneficiaire);

module.exports = router;
