import dotenv from 'dotenv'
import { NextFunction } from 'express';

dotenv.config({path: '.env-credential'});

export const config: Express.Request =  (req: Express.Request, res: Express.Response, next: NextFunction) => {
    dotenv.config({path: '.env-credential'});
    next();
}

