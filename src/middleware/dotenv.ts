import dotenv from 'dotenv'
import { NextFunction, RequestHandler } from 'express';

// dotenv.config({path: '.env-credential'});

export const config: RequestHandler =  (req: Express.Request, res: Express.Response, next: NextFunction) => {
    dotenv.config({path: '.env-credential'});
    next();
}

