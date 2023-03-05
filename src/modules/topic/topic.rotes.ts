import { Router } from 'express';

import { TopicController } from './topic.controller';
import { body } from 'express-validator';

const topicController = new TopicController();

export const router = Router();

router.route('/')
	.get(topicController.getTopics.bind(topicController))
	.post(body('name').isString(),topicController.createTopic.bind(topicController));


export { router as topicsRouter };
