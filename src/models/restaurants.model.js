const mongoose = require('mongoose')

const RestaurantsSchema = new mongoose.Schema({
    name: String,
    addr: String,
    cp: String,
    city: String,
    //pictures: any,

})

const Restaurants = mongoose.model('restaurants', RestaurantsSchema)

module.exports = Restaurants
