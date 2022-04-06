import {DishesModel} from '../models'
import { commonTypeResponse, commonTypeRequest } from '../types'
import { Dishe } from '../types/types'

/**
 * retreive all restaurants
 * @param {*} req
 * @param {*} res
 */
export const getAll = ((req: commonTypeRequest.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

export const getOne = ((req: commonTypeRequest.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Dishe not found'}))
})

export const createOne = ((req: commonTypeRequest.Express.RequestPost<Dishe>, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

export const updateOne = ((req: commonTypeRequest.Express.RequestPost<Dishe>, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})

export const deleteOne = ((req: commonTypeRequest.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Dishe>) => {
    DishesModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})


