// var express = require('express');
import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req: any, res: any, next: () => void) => {
  res.send('home');
});

export default router;
