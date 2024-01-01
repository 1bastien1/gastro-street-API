import dotenv from 'dotenv'
import { NextFunction, RequestHandler } from 'express';

export const config: RequestHandler =  (req: Express.Request, res: Express.Response, next: NextFunction) => {
    dotenv.config({path: '.env-credential'});
    next();
}

