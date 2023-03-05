import type { NextFunction, Request, Response } from 'express';
import { TopicService } from './topic.service';
import { validationResult } from 'express-validator';
import { ApiError } from '@exceptions/ApiError';
import { TopicDtoRequest } from './dto/TopicDtoRequest';

export class TopicController {
	constructor(private topicService = new TopicService()) {}

	async getTopics(req: Request, res: Response, next: NextFunction) {
		try {
			const topics = await this.topicService.getTopics();

			res.json(topics);
		} catch (error) {
			next(error);
		}
	}

	async createTopic(req: Request, res: Response, next: NextFunction) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest('Validation Error', errors.array()));
			}
			
			const topic = await this.topicService.createTopic(new TopicDtoRequest(req.body));

			res.status(201).json(topic);
		} catch (error) {
			next(error);
		}
	}
}
