var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

var indexRouter = require('./src/routes/index');
var reviewsRouter = require('./src/routes/reviews');
var restaurantsRouter = require('./src/routes/reviews');
var dishesRouter = require('./src/routes/reviews');

var dotenv  = require('./src/middleware/dotenv');
var db = require('./src/middleware/database')

var app = express();

//Middleware
app.use(dotenv.config);
// app.use(db.connectToDB)

mongoose.connect(process.env.DB_URL)
    .then((result) => app.listen(5214))
    .catch((err) => console.log(Error(err)))

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
