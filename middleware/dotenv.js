var dotenv = require('dotenv');
dotenv.config({path: '.env-credential'});

function config(req, res, next) {
    dotenv.config({path: '.env-credential'});
    next();
}

module.exports ={
    config
}