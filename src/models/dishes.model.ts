import Mongoose from 'mongoose'

const DishesSchema = new Mongoose.Schema({
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

export const DishesModel = Mongoose.model('dishes', DishesSchema)