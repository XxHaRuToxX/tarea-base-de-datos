const express = require('express');
const {
    CCreateSport,
    CDeleteSport,
    CGetAllSports,
    CGetSportById,
    CUpdateSport
  } = require("../controllers/sport");
   
  const router = express.Router();
   
  router.route("/").get(CGetAllSports).post(CCreateSport);
  router.route("/:id").get(CGetSportById).put(CUpdateSport).delete(CDeleteSport);
   
 module.exports = router;