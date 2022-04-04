import Express from 'express'
import Path from 'path'
import cookieParser from 'cookie-parser';
import logger from 'morgan'

import indexRouter from './src/routes/index'
import reviewsRouter from './src/routes/reviews'
import restaurantsRouter from './src/routes/restaurants'
import dishesRouter from './src/routes/dishes'

import dotenv from 'dotenv'
import {connectToDB} from './src/middleware/database'

var app = Express();

//Middleware
app.use(dotenv.config);
app.use(connectToDB)
app.use(logger('dev'));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Express.static(Path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/dishes', dishesRouter);


export default app;
