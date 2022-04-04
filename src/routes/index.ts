import { NextFunction } from "express";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: any, res: any, next: NextFunction) {
  res.send('home');
});

module.exports = router;
