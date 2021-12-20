import { Router } from 'express';
import * as testController from '../controllers/testController';

const router = Router();

router.post('', testController.createTest);
router.get('', testController.listTestsByCategory);

export default router;
