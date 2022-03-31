var express = require('express');
var router = express.Router();
var RestaurantController = require('../controllers/restaurants.controller')

/* GET all restaurant listing. */
router.get('/', RestaurantController.getAll, () => {
  res.send(res);
});

/* GET one restaurant listing. */
router.get('/:id', RestaurantController.getOne, () => {
  res.send(res);
});

/* POST restaurant listing. */
router.post('/', RestaurantController.createOne, () => {
  res.send(res);
});

/* UPDATE restaurant listing. */
//TODO post = update?
router.post('/:id', RestaurantController.updateOne, () => {
  res.send(res);
});

/* DELETE restaurant listing. */
router.delete('/:id', RestaurantController.deleteOne, () => {
  res.send(res);
});



module.exports = router;
