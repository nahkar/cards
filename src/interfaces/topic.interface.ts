import type { Types } from 'mongoose';

export interface ITopic {
	_id: Types.ObjectId;
	id: string;
	name: string;
}
