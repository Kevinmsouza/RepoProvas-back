import { Request, Response, NextFunction } from 'express';
import * as termService from '../services/termService';

async function listTerms(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await termService.listTerms();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

export {
    listTerms,
};
