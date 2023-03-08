import type { IUnit, IWord } from '@interfaces/unit.interface';

export class UnitDtoResponse {
	id: string;
	name: string;
	idTopic: string;
	words: Pick<IWord, 'isMemorized' | 'translate' | 'word' | 'id'> [];
	constructor(model: IUnit) {
		this.id = model.id;
		this.idTopic = model.idTopic;
		this.name = model.name;
		this.words = model.words.map((word) => ({
			id: word.id,
			isMemorized: word.isMemorized,
			translate: word.translate,
			word: word.word,
		}));
	}
}
