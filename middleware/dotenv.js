var dotenv = require('dotenv');
dotenv.config({path: '../.env-credential'});

function readEnvFile(req, res, next) {
    //console.log('parse env file: ', dotenv.parse());
    console.log('parse env file: ');
    next();
}

module.exports ={
    readEnvFile: readEnvFile
}