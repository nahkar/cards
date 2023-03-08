import type { Types } from 'mongoose';

export interface IWord {
	_id: Types.ObjectId;
	id: string;
	word: string;
	translate: string;
	isMemorized: boolean;
}

export interface IUnit {
	_id: Types.ObjectId;
	id: string;
	topicId: Types.ObjectId;
	idTopic: string;
	name: string;
	words: IWord[]
}
