import { Topic } from '@models/Topic.model';
import { CreateTopicPropsT } from './types/topic.types';

export class TopicRepository {
	constructor(private topicModel = Topic) {}
	async find() {
		const topics = await this.topicModel.find();
		return topics;
	}

	async create({ name }: CreateTopicPropsT) {
		const topic =  this.topicModel.create({ name });
		return topic;
	}

	async isExist(props: CreateTopicPropsT) {
		const isExist = await this.topicModel.exists(props);

		return isExist;
	}
}
