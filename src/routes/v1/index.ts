import { topicRouter } from '@modules/topic/topic.routes';
import { unitRouter } from '@modules/unit/unit.routes';
import { Router } from 'express';

export const router = Router();

router.use('/topic', topicRouter);
router.use('/unit', unitRouter);
