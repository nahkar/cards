import { Router } from 'express';
import { body } from 'express-validator';

import { TopicController } from './topic.controller';

const topicController = new TopicController();

export const router = Router();

router.route('/')
	.get(topicController.getTopics.bind(topicController))
	.post(body('name').isString(),topicController.createTopic.bind(topicController));

export { router as topicRouter };
