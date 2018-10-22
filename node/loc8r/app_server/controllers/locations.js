var request = require('request');var apiOptions = {    basePath: 'http://localhost:3000'};var _isNumeric = function (n) {    return !isNaN(parseFloat(n)) && isFinite(n);};var _formatDistance = function (distance) {    var unit, numDistance;    if (!_isNumeric(distance)) {        return;    }    if (distance > 1) {        numDistance = parseFloat(distance).toFixed(1);        unit = 'km'    } else {        numDistance = parseInt(distance * 1000, 10);        unit = 'm';    }    return numDistance + unit;};var _showError = function (req, res, statusCode) {    var title, content;    if (statusCode === 404) {        title = '404';        content = '此网页已经走丢了';    } else {        title = statusCode;        content = '发生了一些错误';    }    res.status(statusCode);    res.render('generic-text', {        title: title,        content: content    });};//评论页和详情页都要对/api/locations/:locationid进行请求，把方法单独抽取var getLocationInfo = function (req, res, callback) {    var requestOptions, path;    path = '/api/locations/' + req.params.locationid;    requestOptions = {        url: apiOptions.basePath + path,        method: 'GET',        json: {}    };    request(requestOptions, function (err, response, body) {        var data = body;        if (response.statusCode === 200) {            data.coords = {                lng: data.coords[0],                lat: data.coords[1]            };            callback(req, res, data);        } else {            _showError(req, res, response.statusCode);        }    });};var renderHomepage = function (req, res, responseBody) {    // var message;    // if (!(responseBody instanceof Array)) {    //     message = 'url 错误';    //     responseBody = [];    // } else {    //     if (responseBody.length <= 0) {    //         message = 'No places found nearby';    //     }    // }    res.render('locations-list', {        title: 'Loc8r - find a place to work with wifi',        pageHeader: {            title: 'Loc8r',            strapline: 'Find places to work with wifi near you!'        },        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a print?Let Loc8r help you find the place you're looking for.",        // locations: responseBody,        // message: message    });};var renderDetailpage = function (req, res, locationDetail) {    res.render('location-info', {        title: locationDetail.name,        pageHeader: {title: locationDetail.name},        sidebar: {            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',            callToAction: 'If you\'ve been and you like it - or if you don\'t please leave a review to help other people just like you.'        },        location: locationDetail    });};var renderReviewForm = function (req, res, data) {    res.render('location-review-form', {        title: 'Review ' + data.name + ' on Loc8r',        pageHeader: {title: 'Review ' + data.name},        error: req.query.err,        url: req.originalUrl    });};var homepage = function (req, res) {    var requestOptions, path;    path = '/api/locations';    requestOptions = {        url: apiOptions.basePath + path,        method: 'GET',        json: {},        qs: {            lng: -0.7992599,            lat: 51.378091,            maxDistance: 20        }    };    request(requestOptions, function (err, response, body) {        var i, data = body;        if (response.statusCode === 200 && data.length) {            for (i = 0; i < data.length; i++) {                data[i].distance = _formatDistance(data[i].distance);            }        }        renderHomepage(req, res, data);    });};var detailpage = function (req, res) {    getLocationInfo(req, res, function (req, res, data) {        renderDetailpage(req, res, data);    })};var reviewpage = function (req, res) {    getLocationInfo(req, res, function (req, res, data) {        renderReviewForm(req, res, data);    });};var postReview = function (req, res) {    //发送评论依然在评论页面之中，req仍然是从详情页跳转来时候的request，还是带着locationid的参数    var requestOptions, path, locationid, postData;    locationid = req.params.locationid;    path = '/api/locations/' + locationid + '/reviews';    postData = {        author: req.body.name,        rating: parseInt(req.body.rating),        reviewText: req.body.review    };    requestOptions = {        url: apiOptions.basePath + path,        method: 'POST',        json: postData    };    if (!postData || !postData.rating || !postData.reviewText) {        res.redirect('/location/' + locationid + '/reviews/new?err=val');    } else {        request(requestOptions, function (err, response, body) {            console.log(body);            //根据状态码的不同，跳转到不同的页面            if (response.statusCode === 201) {                res.redirect('/location/' + locationid);            } else if (response.statusCode === 400 && body.name && body.name === 'ValidationError') {                res.redirect('/location/' + locationid + '/reviews/new?err=val');            } else {                _showError(req, res, response.statusCode);            }        });    }};module.exports.homepage = homepage;module.exports.detailpage = detailpage;module.exports.reviewpage = reviewpage;module.exports.postreview = postReview;