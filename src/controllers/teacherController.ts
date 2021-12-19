import { Request, Response, NextFunction } from 'express';
import * as teacherService from '../services/teacherService';

async function listTeachers(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await teacherService.listTeachers();
        res.send(result);
    } catch (error) {
        next(error);
    }
}

export {
    listTeachers,
};
