import { Request, Response, NextFunction } from 'express';
import * as subjectService from '../services/subjectService';

async function listSubjects(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await subjectService.listSubjects();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

export {
    listSubjects,
};
