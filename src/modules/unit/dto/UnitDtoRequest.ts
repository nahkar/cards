import type { IUnit, IWord } from '@interfaces/unit.interface';

export class UnitDtoRequest {
	name: string;
	idTopic: string;
	words: Pick<IWord, 'isMemorized' | 'translate' | 'word'>[];
	constructor(model: Pick<IUnit, 'name' | 'words' | 'idTopic'>) {
		this.idTopic = model.idTopic;
		this.name = model.name;
		this.words = model.words.map((data) => ({
			word: data.word,
			translate: data.translate,
			isMemorized: data.isMemorized,
		}));
	}
}
