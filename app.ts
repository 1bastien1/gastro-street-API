// const express = require('express');
import express from 'express';
// const path = require('path');
import path from 'path';
// const cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// const logger = require('morgan');
import logger from 'morgan';

// const debug = require('debug')('gastrostreet:server');
import debug from 'debug';
debug('gastrostreet:server');
// const http = require('http');
import http from 'http'
// const indexRouter = require('./src/routes/index');
import indexRouter from './src/routes/index';
import { AddressInfo } from 'net';

// TODO
// const reviewsRouter = require('./src/routes/reviews');
// const restaurantsRouter = require('./src/routes/restaurants');
// const dishesRouter = require('./src/routes/dishes');
// const dotenv  = require('./src/middleware/dotenv');
// const db = require('./src/middleware/database')

const app = express();

 function normalizePort(val: any) {
   // tslint:disable-next-line: no-shadowed-variable
   const port = parseInt(val, 10);

   if (isNaN(port)) {
     // named pipe
     return val;
   }

   if (port >= 0) {
     // port number
     return port;
   }

   return false;
 }

 /**
  * Event listener for HTTP server "error" event.
  */
 function onError(error: any) {
   if (error.syscall !== 'listen') {
     throw error;
   }

   const bind = typeof port === 'string'
     ? 'Pipe ' + port
     : 'Port ' + port;

   // handle specific listen errors with friendly messages
   switch (error.code) {
     case 'EACCES':
       // console.error(bind + ' requires elevated privileges');
       process.exit(1);
       break;
     case 'EADDRINUSE':
       // console.error(bind + ' is already in use');
       process.exit(1);
       break;
     default:
       throw error;
   }
 }

 /**
  * Event listener for HTTP server "listening" event.
  */
 function onListening() {
   const addr = server.address() as AddressInfo;
   const bind = typeof addr === 'string'
     ? 'pipe ' + addr
     : 'port ' + addr.port;
   debug('Listening on ' + bind);
 }



/**
 * Get port from environment and store in Express.
 */
 const port = normalizePort(process.env.PORT || '3000');
 app.set('port', port);

 /**
  * Create HTTP server.
  */
 const server = http.createServer(app);

 /**
  * Listen on provided port, on all network interfaces.
  */
 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);


// Middleware
// app.use(dotenv.config);
// app.use(db.connectToDB)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/reviews', reviewsRouter);
// app.use('/restaurants', restaurantsRouter);
// app.use('/dishes', dishesRouter);


module.exports = app;
