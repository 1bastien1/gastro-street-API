import { NextFunction } from 'express';
import Mongoose from 'mongoose'

export const connectToDB = (_req: Express.Request, _res: Express.Response, next: NextFunction) => {
    Mongoose.connect(process.env.DB_URL || '')
    .then(() => console.log('connect to db'))
    .catch((err) => console.log(Error(err)))
    next();
}
