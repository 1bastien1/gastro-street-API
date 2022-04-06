import {DishesModel} from '../models'
import { commonTypeResponse, disheType } from '../types'
import { Dishe } from '../types/requestTypeDishe'

/**
 * retreive all restaurants
 * @param {*} req
 * @param {*} res
 */
export const getAll = ((req: disheType.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

export const getOne = ((req: disheType.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Dishe not found'}))
})

export const createOne = ((req: disheType.Express.RequestPost, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

export const updateOne = ((req: disheType.Express.RequestPost, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})

export const deleteOne = ((req: disheType.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})


