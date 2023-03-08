import { ApiError } from '@exceptions/ApiError';
import { UnitService } from '@modules/unit/unit.service';

import { TopicRepository } from './topic.repository';

import type { CreateTopicDtoRequest } from './dto/CreateTopicDtoRequest';

export class TopicService {
	constructor(private topicRepository = new TopicRepository(), private unitService = new UnitService()) {}

	async getTopics() {
		const topics = await this.topicRepository.find();

		return topics;
	}

	async getTopic(id: string) {
		const topic = await this.topicRepository.findById(id);
		const units = await this.unitService.getUnits(id);
		return { topic, units };
	}

	async createTopic(props: CreateTopicDtoRequest) {

		const isExist = await this.topicRepository.isExist(props);

		if(isExist) {
			throw ApiError.BadRequest('This topic\'s name is already exists');
		}

		const topic = await this.topicRepository.create(props);

		return topic;
	}
}
