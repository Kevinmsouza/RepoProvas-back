import { Request, Response, NextFunction } from 'express';
import * as testValidation from '../validations/testValidation';
import * as testService from '../services/testService';

async function createTest(req: Request, res: Response, next: NextFunction) {
    try {
        if (testValidation.newTest(req.body)) return res.sendStatus(400);
        await testService.createTest(req.body);
        res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

export {
    createTest,
};
