import { validationResult } from 'express-validator';
import { ApiError } from '@exceptions/ApiError';
import httpStatus from 'http-status';

import { TopicService } from './topic.service';
import { GetTopicsDtoResponse } from './dto/GetTopicsDtoResponse';
import { CreateTopicDtoRequest } from './dto/CreateTopicDtoRequest';
import { CreateTopicDtoResponse } from './dto/CreateTopicDtoResponse';
import { GetTopicDtoResponse } from './dto/GetTopicDtoResponse';

import type { NextFunction, Request, Response } from 'express';

export class TopicController {
	constructor(private topicService = new TopicService()) {}

	async getTopics(req: Request, res: Response, next: NextFunction) {
		try {
			const topics = await this.topicService.getTopics();
			res.json(topics.map(topic => ({ ...new GetTopicsDtoResponse(topic) })));
		} catch (error) {
			next(error);
		}
	}

	async getTopic(req: Request, res: Response, next: NextFunction) {
		try {
			const response = await this.topicService.getTopic(req.params.id);
			res.json(new GetTopicDtoResponse(response));
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

			const topic = await this.topicService.createTopic(new CreateTopicDtoRequest(req.body));

			res.status(httpStatus.CREATED).json(new CreateTopicDtoResponse(topic));
		} catch (error) {
			next(error);
		}
	}
}
