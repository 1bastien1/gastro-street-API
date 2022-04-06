import {ReviewsModel} from '../models'
import { commonTypeRequest, commonTypeResponse } from '../types'
import { Review } from '../types/types'

/**
 * retreive all restaurants
 * @param {*} req
 * @param {*} res
 */
export const getAll = ((req: commonTypeRequest.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Review>) => {
    ReviewsModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

export const getOne = ((req: commonTypeRequest.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Review>) => {
    ReviewsModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Review not found'}))
})

export const createOne = ((req: commonTypeRequest.Express.RequestPost<Review>, res: commonTypeResponse.Express.ResponseGet<Review>) => {
    ReviewsModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

export const updateOne = ((req: commonTypeRequest.Express.RequestPost<Review>, res: commonTypeResponse.Express.ResponseGet<Review>) => {
    ReviewsModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rewiew not found' }))
})

export const deleteOne = ((req: commonTypeRequest.Express.RequestGet, res: commonTypeResponse.Express.ResponseGet<Review>) => {
    ReviewsModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Rewiew not found' }))
})

