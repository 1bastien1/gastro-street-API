var mongoose = require('mongoose')
var express = require('express');
var app = express();

function connectToDB(req, res, next) {
    // console.log('connect to db')
    // mongoose.connect(process.env.DB_URL)
    // .then((result) => app.listen(5214))
    // .catch((err) => console.log(Error(err)))
    // next();
    
}
    
module.exports = {
    connectToDB
}