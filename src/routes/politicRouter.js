const express = require('express');
const {
    CCreatePolitic,
    CDeletePolitic,
    CGetAllPolitics,
    CGetPoliticById,
    CUpdatePolitic
  } = require("../controllers/politic");
   
  const router = express.Router();
   
  router.route("/").get(CGetAllPolitics).post(CCreatePolitic);
  router.route("/:id").get(CGetPoliticById).put(CUpdatePolitic).delete(CDeletePolitic);
   
 module.exports = router;