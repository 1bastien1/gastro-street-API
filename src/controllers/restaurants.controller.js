const RestaurantModel = require('../models/restaurants.model')

/**
 * retreive all restaurants
 * @param {*} req 
 * @param {*} res 
 */
const getAll = ((req, res) => {
    RestaurantModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getOne = ((req, res) => {
    RestaurantModel.findOne({ _id: req.params.productID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Product not found'}))
})

const createOne = ((req, res) => {
    RestaurantModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateOne = ((req, res) => {
    RestaurantModel.findOneAndUpdate({ _id: req.params.productID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})

const deleteOne = ((req, res) => {
    RestaurantModel.findOneAndDelete({ _id: req.params.productID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}
