import type { Types } from 'mongoose';

export interface IWord {
	name: string;
	translate: string;
	isMemorized: boolean;
}

export interface IUnit {
	_id: Types.ObjectId;
	topicId: Types.ObjectId;
	name: string;
	words: IWord[]
}
