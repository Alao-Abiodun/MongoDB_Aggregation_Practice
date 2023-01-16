import express from 'express';
const router = express.Router();
import { createPlan } from '../controllers/plan.controller'

router.post('/create', createPlan);

export { router as Plan }; 
