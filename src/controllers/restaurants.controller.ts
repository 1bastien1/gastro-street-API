import {RestaurantsModel} from '../models'
import { commonTypeRequest, commonTypeResponse } from '../types'
import { Restaurant } from '../types/types'

/**
 * retreive all restaurants
 * @param {*} req
 * @param {*} res
 */
export const getAll = ((req: Express.Request, res: Express.Response) => {
    RestaurantsModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

export const getOne = ((req: Express.Request, res: Express.Response) => {
    RestaurantsModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Product not found'}))
})

export const createOne = (req: Express.Request, res: Express.Response) => {
    RestaurantsModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
}

export const updateOne = ((req: Express.Request, res: Express.Response) => {
    RestaurantsModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})

export const deleteOne = ((req: Express.Request, res: Express.Response) => {
    RestaurantsModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Product not found' }))
})
