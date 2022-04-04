const DisheModel = require('../models/dishes.model')

/**
 * retreive all restaurants
 * @param {*} req 
 * @param {*} res 
 */
const getAll = ((req, res) => {
    DisheModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

const getOne = ((req, res) => {
    DisheModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Dishe not found'}))
})

const createOne = ((req, res) => {
    DisheModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateOne = ((req, res) => {
    DisheModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})

const deleteOne = ((req, res) => {
    DisheModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})

const hasOne = ((id) => {
    console.log('pass through')
        DisheModel.findOne({ _id: id })
            .then(() => true)
            .catch(() => false)
})

module.exports = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
    hasOne,
}
