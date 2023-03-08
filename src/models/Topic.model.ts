import mongoose from 'mongoose';

import type { ITopic } from '@interfaces/topic.interface';

const TopicSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
},{
	id: true,
	toJSON: {
		virtuals: true,
	},
	toObject: {
		virtuals: true,
	},
	versionKey: false,
});

export const Topic = mongoose.model<ITopic>('Topic', TopicSchema);
