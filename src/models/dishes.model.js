const mongoose = require('mongoose')

const DishesSchema = new mongoose.Schema({
    name: String,
    price: Number,
    allergens: [String],
    ingredients: [String],
    //pictures: any,

})

const Dishes = mongoose.model('dishes', DishesSchema)

module.exports = Dishes
