var express = require('express');var router = express.Router();//controllersvar ctrlLocations = require('../controllers/locations');var ctrlReviews = require('../controllers/reviews');//locations apirouter.get('/locations', ctrlLocations.locationsListByDistance); //donerouter.get('/locations/:locationid', ctrlLocations.locationsReadOne); //donerouter.post('/locations', ctrlLocations.locationsCreate);router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);router.delete('locations/:locationdid', ctrlLocations.locationsDeleteOne);//reviews apirouter.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne); //donerouter.post('/locations/:locationid/reviews', ctrlReviews.reviewsCreate);router.delete('/locations/:locationid/review/:reviewid', ctrlReviews.reviewsDeleteOne);router.put('/locations/:locationid/review/:reviewid', ctrlReviews.reviewsUpdateOne);module.exports = router;