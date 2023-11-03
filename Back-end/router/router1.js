const express = require('express')

const router = express.Router();

const {countrylist,getcoordinate,sortcity,sortpopulation_socialdata,
sortcityDsc,sortGdp_socialdata} = require('../controllers/controller1');


router.post("/countrylist",countrylist);
router.post("/getdata",getcoordinate);
router.post("/sortcity",sortcity);
router.post("/sortcitydsc",sortcityDsc);
router.post("/sort_population",sortpopulation_socialdata);
router.post('/sort_gdp',sortGdp_socialdata);
module.exports = router;