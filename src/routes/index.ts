import { NextFunction } from "express";

import express from "express";
const router = express.Router();

/* GET home page. */
router.get('/', function(req: any, res: any, next: NextFunction) {
  res.send('home');
});

export default router;
