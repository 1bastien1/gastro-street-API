var express = require('express');
var router = express.Router();
var DishesController = require('../controllers/dishes.controller')

/* GET all restaurant listing. */
router.get('/', DishesController.getAll, () => {
  res.send(res);
});

/* GET one restaurant listing. */
router.get('/:id', DishesController.getOne, () => {
  res.send(res);
});

/* POST restaurant listing. */
router.post('/', DishesController.createOne, () => {
  res.send(res);
});

/* UPDATE restaurant listing. */
//TODO post = update?
router.post('/:id', DishesController.updateOne, () => {
  res.send(res);
});

/* DELETE restaurant listing. */
router.delete('/:id', DishesController.deleteOne, () => {
  res.send(res);
});

module.exports = router;
