import Mongoose from 'mongoose'

const RestaurantsSchema = new Mongoose.Schema({
    name: String,
    addr: String,
    cp: String,
    city: String,
    // pictures: any,

})

export const RestaurantsModel = Mongoose.model('restaurants', RestaurantsSchema)
