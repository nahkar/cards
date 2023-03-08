import type { ITopic } from '@interfaces/topic.interface';

export class CreateTopicDtoRequest {
	name: string;
	constructor(model: ITopic) {
		this.name = model.name;
	}
}
