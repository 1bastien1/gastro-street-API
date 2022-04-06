import { NextFunction, RequestHandler } from 'express';
import Mongoose from 'mongoose'

export const connectToDB: RequestHandler = (_req: Express.Request, _res: Express.Response, next: NextFunction) => {
    Mongoose.connect(process.env.DB_URL || '')
    next();
}
