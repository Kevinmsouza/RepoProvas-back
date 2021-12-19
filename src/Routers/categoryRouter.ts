import { Router } from 'express';
import * as categoryController from '../controllers/categoryController';

const router = Router();

router.get('', categoryController.listCategorys);

export default router;
