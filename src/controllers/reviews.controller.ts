import {ReviewsModel} from '../models'
import { commonTypeRequest, commonTypeResponse } from '../types'
import { Review } from '../types/types'
import { hasOne } from './dishes.controller'

/**
 * retreive all restaurants
 * @param {*} req
 * @param {*} res
 */
export const getAll = ((req: Express.Request, res: Express.Response) => {
    ReviewsModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

export const getOne = ((req: Express.Request, res: Express.Response) => {
    ReviewsModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Review not found'}))
})

export const createOne = (async (req: Express.Request, res: Express.Response) => {
    const dishe = await hasOne(req, res);
    if(dishe){
        ReviewsModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
    }
    else{
        res.status(400).json({msg:  'Dishe not found' })
    }
})

export const updateOne = ((req: Express.Request, res: Express.Response) => {
    ReviewsModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rewiew not found' }))
})

export const deleteOne = ((req: Express.Request, res: Express.Response) => {
    ReviewsModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rewiew not found' }))
})

