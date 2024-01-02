import Mongoose from 'mongoose'

const RestaurantsSchema = new Mongoose.Schema({
    
    name: {type: String, required: true},
    addr: {type: String, required: true},
    cp: {type: String, required: true},
    city: {type: String, required: true},
    // pictures: any,

})

export const RestaurantsModel = Mongoose.model('restaurants', RestaurantsSchema)
