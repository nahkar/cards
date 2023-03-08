import type { ITopic } from '@interfaces/topic.interface';

export class CreateTopicDtoResponse {
	id: string;
	name: string;
	constructor(model: ITopic) {
		this.id = model.id;
		this.name = model.name;

	}
}
