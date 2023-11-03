const express = require('express')

const router = express.Router();

const {countrylist,getcoordinate,sortcity,sortpopulation_socialdata,
sortcityDsc,sortGdp_socialdata} = require('../controllers/controller1');


//router.get("/",countrylist);
router.get("/getdata",getcoordinate);
router.get("/sortcity",sortcity);
router.get("/sortcitydsc",sortcityDsc);
router.get("/sort_population",sortpopulation_socialdata);
router.get('/sort_gdp',sortGdp_socialdata);
module.exports = router;