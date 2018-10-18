var mongoose = require('mongoose');//加载Location对应的modelvar Loc = mongoose.model('Location');var sendResponse = function (res, status, content) {    res.status(status);    res.json(content);};function doSetAverageRating(locationObj) {    var totalRating = 0, averageRating = 0;    if (locationObj.reviews && locationObj.reviews.length > 0) {        for (var i = 0; i < locationObj.reviews.length; i++) {            totalRating += locationObj.reviews[i].rating;        }        averageRating = parseInt(totalRating / locationObj.reviews.length);        locationObj.rating = averageRating;        locationObj.save(function (err) {            if (err) {                console.log('计算平均评分错误： ' + err);            } else {                console.log('平均评分已经更新：', averageRating);            }        });    }}function updateAverageRting(locationId) {    Loc.findById(locationId)        .select('rating reviews')        .exec(function (err, locationObj) {            doSetAverageRating(locationObj);        });}function doAddReview(req, res, locationObj) {    if (!locationObj) {        sendResponse(res, 404, {'message': 'locationid not found'});    } else {        locationObj.reviews.push({            author: req.body.author,            rating: req.body.rating,            reviewText: req.body.reviewText        });        locationObj.save(function (err, locationObj) {            if (err) {                sendResponse(res, 400, err);            } else {                updateAverageRting(locationObj._id);                var thisReview = locationObj.reviews[locationObj.reviews.length - 1];                sendResponse(res, 201, thisReview);            }        });    }}var reviewsCreate = function (req, res) {    var locationid = req.params.locationid;    if (locationid) {        Loc.findById(locationid)            .select('reviews')            .exec(function (err, locationObj) {                if (err) {                    sendResponse(res, 404, {'message': err});                } else {                    //此处查找到了parent document中的所有的subdocument,但是依然包裹在id所对应的location对象中                    doAddReview(req, res, locationObj);                }            })    } else {        sendResponse(res, 404, {'message': 'locationid not found'});    }};var reviewsReadOne = function (req, res) {    if (req.params && req.params.reviewid && req.params.locationid) {        Loc.findById(req.params.locationid)            .select('name reviews') //select之后获取的依然是parent document，只不过除了id之外仅保留了select选中的部分            .exec(function (err, locationObj) {                if (!locationObj) {                    sendResponse(res, 404, {'message': 'locationid not found'});                    return;                } else if (err) {                    sendResponse(res, 404, err);                    return;                }                if (locationObj.reviews && locationObj.reviews.length > 0) {                    // sendResponse(res, 200, locationObj); //这样获取的才是parent document里面真实的sub document                    var reviewObj = locationObj.reviews[req.params.reviewid]; //使用索引代替了reviewid                    if (!reviewObj) {                        sendResponse(res, 404, {'message': 'reviewid not found'});                    } else {                        var response = {                            location: {                                name: locationObj.name,                                id: req.params.locationid                            },                            review: reviewObj                        };                        sendResponse(res, 200, response);                    }                } else {                    sendResponse(res, 404, {'message': 'No reviews found'});                }            });    } else {        sendResponse(res, 404, {'message': 'not review id in request'})    }};var reviewsUpdateOne = function (req, res) {    if (!req.params.locationid || !req.params.reviewid) {        sendResponse(res, 404, {'message': 'locationid OR reviewid not found!'});        return;    }    Loc.findById(req.params.locationid)        .select('reviews')        .exec(function (err, locationObj) {            if (err) {                sendResponse(res, 404, err);                return;            } else if (!locationObj) {                sendResponse(res, 404, {'message': 'locationid not found'});                return;            }            if (locationObj.reviews && locationObj.reviews.length > 0) {                //find subdocument by id                var currReview = locationObj.reviews.id(req.params.reviewid);                if (!currReview) {                    sendResponse(res, 404, {'message': 'reviewid not found'});                } else {                    currReview.author = req.body.author;                    currReview.rating = req.body.rating;                    currReview.reviewText = req.body.reviewText;                    locationObj.save(function (err) {                        if (err) {                            sendResponse(res, 404, err);                        } else {                            updateAverageRting(locationObj._id);                            sendResponse(res, 200, currReview);                        }                    });                }            } else {                sendResponse(res, 404, {'message': 'No review to update'});            }        });};var reviewDeleteOne = function (req, res) {    var locationid = req.params.locationid;    var reviewid = req.params.reviewid;    if (!locationid || !reviewid) {        sendResponse(res, 404, {'message': 'lack id in params'});        return;    }    Loc.findById(locationid)        .select('reviews')        .exec(function (err, locationObj) {            if (!locationObj) {                sendResponse(res, 404, {'message': 'location not found'});                return;            } else if (err) {                sendResponse(res, 404, err);                return;            }            if (!locationObj.reviews.id(reviewid)) {                sendResponse(res, 404, {'message': 'reviewid not found'});            } else {                locationObj.reviews.id(reviewid).remove();                //完成删除后重写到数据库中                locationObj.save(function (err) {                    if (err) {                        sendResponse(res, 404, err);                    } else {                        updateAverageRting(locationObj._id);                        sendResponse(res, 200, {'message': 'delete review successful'});                    }                });            }        });};module.exports.reviewsCreate = reviewsCreate;module.exports.reviewsReadOne = reviewsReadOne;module.exports.reviewsUpdateOne = reviewsUpdateOne;module.exports.reviewsDeleteOne = reviewDeleteOne;