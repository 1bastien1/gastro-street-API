import {DishesModel} from '../models'

/**
 * retreive all restaurants
 * @param {*} req 
 * @param {*} res 
 */
export const getAll = ((req: any, res: any) => {
    DishesModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

export const getOne = ((req: any, res: any) => {
    DishesModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Dishe not found'}))
})

export const createOne = ((req: any, res: any) => {
    DishesModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

export const updateOne = ((req: any, res: any) => {
    DishesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})

export const deleteOne = ((req: any, res: any) => {
    DishesModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})


