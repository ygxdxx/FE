var express = require('express');
var router = express.Router();

var locations = require('../controllers/locations');
var others = require('../controllers/others');

//location page
router.get('/', locations.homepage);
router.get('/location/:locationid', locations.detailpage);
router.get('/location/review/new', locations.addReview);

//other page
router.get('/about', others.about);

module.exports = router;
