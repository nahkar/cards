import { ITopic } from "@interfaces/topic.interface";

export class TopicDtoResponse {
	id: string;
	name: string;
	constructor(model: ITopic) {
		this.id = model._id.toString();
		this.name = model.name;

	}
}
