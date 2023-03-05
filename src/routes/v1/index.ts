import { topicsRouter } from '@modules/topic/topic.rotes';
import { Router } from 'express';

export const router = Router();


router.use('/topic', topicsRouter);
