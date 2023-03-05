import { ApiError } from "@exceptions/ApiError";
import { TopicDtoResponse } from "./dto/TopicDtoResponse";
import { TopicRepository } from "./topic.repository";
import { CreateTopicPropsT } from "./types/topic.types";

export class TopicService {
	constructor(private topicRepository = new TopicRepository()) {}

	async getTopics() {
		const topics = await this.topicRepository.find();

		const response = topics.map(topic => new TopicDtoResponse(topic))
		return response;
	}

	async createTopic(props: CreateTopicPropsT) {

		const isExist = await this.topicRepository.isExist(props);

		if(isExist) {
			throw ApiError.BadRequest("This topic's name is already exists");
		}

		const topic = await this.topicRepository.create(props);

		return new TopicDtoResponse(topic);
	}
}
