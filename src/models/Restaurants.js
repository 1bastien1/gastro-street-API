const mongoose = require('mongoose')

const RestaurantsSchema = new mongoose.Schema({
    id: String,
    name: String,
    addr: String,
    cp: String,
    city: String,
    pictures: any,

})

const Restaurants = mongoose.model('Restaurants', RestaurantsSchema)

module.exports = Restaurants
