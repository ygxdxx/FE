var express = require('express');
var router = express.Router();

var locations = require('../controllers/locations');
var others = require('../controllers/others');

//location page
router.get('/', locations.homepage);
router.get('/location/:locationid', locations.detailpage);
router.get('/location/:locationid/reviews/new', locations.reviewpage); //获取填写评论的页面
router.post('/location/:locationid/reviews/new', locations.postreview); //像服务器发送平路内容

//other page
router.get('/about', others.about);

module.exports = router;
