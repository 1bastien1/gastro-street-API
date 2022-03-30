var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var reviewsRouter = require('./routes/reviews');
var restaurantsRouter = require('./routes/reviews');
var dishesRouter = require('./routes/reviews');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/reviews', reviewsRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/dishes', dishesRouter);


module.exports = app;
