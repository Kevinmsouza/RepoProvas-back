import { Router } from 'express';
import * as termController from '../controllers/termController';

const router = Router();

router.get('', termController.listTerms);

export default router;
