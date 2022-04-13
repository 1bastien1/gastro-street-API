import { NextFunction } from 'express'
import {DishesModel} from '../models'
import { commonTypeResponse, commonTypeRequest } from '../types'
import { Dishe } from '../types/types'

/**
 * retreive all restaurants
 * @param {*} req
 * @param {*} res
 */
export const getAll = ((req: Express.Request, res: Express.Response) => {
    DishesModel.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

export const getOne = ((req: Express.Request, res: Express.Response) => {
    DishesModel.findOne({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Dishe not found'}))
})

export const createOne = ((req: Express.Request, res: Express.Response) => {
    DishesModel.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

export const updateOne = ((req: Express.Request, res: Express.Response) => {
    DishesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})

export const deleteOne = ((req: Express.Request, res: Express.Response) => {
    DishesModel.findOneAndDelete({ _id: req.params.id })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Dishe not found' }))
})

export const hasOne = async (req: Express.Request, res: Express.Response): Promise<any> => {
    const dishe = await DishesModel.exists({ _id: req.body.idDishe })
    return dishe;
}
