import Express from 'express';
import {ReviewsController} from '../controllers/';
const router = Express.Router();


/* GET all restaurant listing. */
router.get('/', ReviewsController.getAll, (req, res) => {
  res.send(res);
});

/* GET one restaurant listing. */
router.get('/:id', ReviewsController.getOne, (req, res) => {
  res.send(res);
});

/* POST restaurant listing. */
router.post('/', ReviewsController.createOne, (req, res) => {
  res.send(res);
});

/* UPDATE restaurant listing. */
// TODO post = update?
router.post('/:id', ReviewsController.updateOne, (req, res) => {
  res.send(res);
});

/* DELETE restaurant listing. */
router.delete('/:id', ReviewsController.deleteOne, (req, res) => {
  res.send(res);
});



export default router;
