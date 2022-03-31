var mongoose = require('mongoose')
var express = require('express');
var app = express();

function connectToDB(req, res, next) {
    mongoose.connect(process.env.DB_URL)
    .then((result) => console.log('connect to db'))
    .catch((err) => console.log(Error(err)))
    next();
    
}
    
module.exports = {
    connectToDB
}