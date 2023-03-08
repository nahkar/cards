import { Topic } from '@models/Topic.model';
import { ApiError } from '@exceptions/ApiError';

import type { ITopic } from '@interfaces/topic.interface';
import type { CreateTopicDtoRequest } from './dto/CreateTopicDtoRequest';

export class TopicRepository {
	constructor(private topicModel = Topic) {}
	async find() {
		const topics = await this.topicModel.find();
		return topics;
	}

	async create({ name }: CreateTopicDtoRequest) {
		const topic =  this.topicModel.create({ name });
		return topic;
	}

	async isExist(props: Partial<ITopic>) {
		const isExist = await this.topicModel.exists(props);
		return isExist;
	}

	async findById(id: string) {
		const topic = await this.topicModel.findById(id);

		if(!topic){
			throw ApiError.BadRequest('Topic does not exist');
		}

		return topic;
	}
}
