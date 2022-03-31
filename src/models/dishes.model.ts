const mongoose = require('mongoose')

const DishesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    currency: {type: String, required: true, enum: ['euro', 'dollar'] },
    allergens: [String],
    ingredients: [String],
    //pictures: any,

})

const Dishes = mongoose.model('dishes', DishesSchema)

module.exports = Dishes
