var express = require('express');
var router = express.Router();
var ReviewController = require('../controllers/reviews.controller')

/* GET all restaurant listing. */
router.get('/', ReviewController.getAll, () => {
  res.send(res);
});

/* GET one restaurant listing. */
router.get('/:id', ReviewController.getOne, () => {
  res.send(res);
});

/* POST restaurant listing. */
router.post('/', ReviewController.createOne, () => {
  res.send(res);
});

/* UPDATE restaurant listing. */
//TODO post = update?
router.post('/:id', ReviewController.updateOne, () => {
  res.send(res);
});

/* DELETE restaurant listing. */
router.delete('/:id', ReviewController.deleteOne, () => {
  res.send(res);
});



module.exports = router;
