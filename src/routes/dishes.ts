import Express from 'express';
import {DishesController} from '../controllers/';
const router = Express.Router();

/* GET all restaurant listing. */
router.get('/', DishesController.getAll, (req, res) => {
  res.send(res);
});

/* GET one restaurant listing. */
router.get('/:id', DishesController.getOne, (req, res) => {
  res.send(res);
});

/* POST restaurant listing. */
router.post('/', DishesController.createOne, (req, res) => {
  res.send(res);
});

/* UPDATE restaurant listing. */
// TODO post = update?
router.post('/:id', DishesController.updateOne, (req, res) => {
  res.send(res);
});

/* DELETE restaurant listing. */
router.delete('/:id', DishesController.deleteOne, (req, res) => {
  res.send(res);
});

export default router;
