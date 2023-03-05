import { ITopic } from "@interfaces/topic.interface";

export class TopicDtoRequest {
	name: string;
	constructor(model: ITopic) {
		this.name = model.name;
	}
}
