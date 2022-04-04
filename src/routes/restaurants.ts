import Express from 'express';
import {RestaurantsController} from '../controllers/';
const router = Express.Router();

/* GET all restaurant listing. */
router.get('/', RestaurantsController.getAll, (req, res) => {
  res.send(res);
});

/* GET one restaurant listing. */
router.get('/:id', RestaurantsController.getOne, (req, res) => {
  res.send(res);
});

/* POST restaurant listing. */
router.post('/', RestaurantsController.createOne, (req, res) => {
  res.send(res);
});

/* UPDATE restaurant listing. */
//TODO post = update?
router.post('/:id', RestaurantsController.updateOne, (req, res) => {
  res.send(res);
});

/* DELETE restaurant listing. */
router.delete('/:id', RestaurantsController.deleteOne, (req, res) => {
  res.send(res);
});

export default router;
