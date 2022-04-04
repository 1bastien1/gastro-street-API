const ReviewsModel = require('../models/reviews.model')
const DisheModel = require('../models/dishes.model')

/**
 * retreive all restaurants
 * @param {*} req 
 * @param {*} res 
 */
const getAll = ((req, res) => {
    ReviewsModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getOne = ((req, res) => {
    ReviewsModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Review not found'}))
})

const createOne = ((req, res) => {
    console.log('pass review create one controller')
    const hasDishe = DisheModel.hasOne(req.body.idDishe);
    if(!hasDishe){
        res.status(400).json({msg:  "not able to add review: dishe not found" })
    }

    ReviewsModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateOne = ((req, res) => {
    ReviewsModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rewiew not found' }))
})

const deleteOne = ((req, res) => {
    ReviewsModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rewiew not found' }))
})

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}
