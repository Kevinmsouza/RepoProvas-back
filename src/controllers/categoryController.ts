import { Request, Response, NextFunction } from 'express';
import * as categoryService from '../services/categoryService';

async function listCategorys(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await categoryService.listCategorys();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

export {
    listCategorys,
};
