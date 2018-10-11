var express = require('express');
//controller
var main = require('../controllers/main');

var router = express.Router();

/* GET home page. */
router.get('/', main.index);

module.exports = router;
