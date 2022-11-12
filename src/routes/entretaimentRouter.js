const express = require('express');
const {
    CCreateEntretaiment,
    CDeleteEntretaiment,
    CGetAllEntretaiments,
    CGetEntretaimentById,
    CUpdateEntretaiment
  } = require("../controllers/entretaiment");
   
  const router = express.Router();
   
  router.route("/").get(CGetAllEntretaiments).post(CCreateEntretaiment);
  router.route("/:id").get(CGetEntretaimentById).put(CUpdateEntretaiment).delete(CDeleteEntretaiment);
   
 module.exports = router;