import Mongoose from 'mongoose'

const ReviewsSchema = new Mongoose.Schema({
    comments: {
        type: String,
        required: true,
    },
    idDishe: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {type: Date, default: new Date()},
    note: { type: Number, required: true, min: 0, max: 10 },
    noteTaste: { type: Number, required: true, min: 0, max: 10 },
    noteQP: { type: Number, required: true, min: 0, max: 10 },
    author: { type: String, required: false },
    // pictures: any,

})

export const ReviewsModel = Mongoose.model('reviews', ReviewsSchema)