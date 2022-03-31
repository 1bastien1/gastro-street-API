const mongoose = require('mongoose')

const ReviewsSchema = new mongoose.Schema({
    comments: {
        type: String,
        required: true,
    },
    idDishe: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {type: Date, default: new Date()},
    note: { type: Number, required: true, min: 0, max: 10 },
    noteTaste: { type: Number, required: true, min: 0, max: 10 },
    noteQP: { type: Number, required: true, min: 0, max: 10 },
    author: { type: String, required: false },
    //pictures: any,

})

const Rewiews = mongoose.model('reviews', ReviewsSchema)

module.exports = Rewiews
