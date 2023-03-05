import type { IUnit, IWord } from '@interfaces/unit.interface';

export class UnitDtoResponse {
	id: string;
	name: string;
	topicId: string;
	words: IWord[];
	constructor(model: IUnit) {
		this.id = model._id.toString();
		this.topicId = model.topicId.toString();
		this.name = model.name;
		this.words = model.words;
	}
}
