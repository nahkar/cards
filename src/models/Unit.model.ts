import mongoose, { Schema, Types } from 'mongoose';

import type { IUnit } from '@interfaces/unit.interface';

export const UnitSchema = new Schema({
	topicId: {
		type: Types.ObjectId,
		ref: 'Topic',
		required: true,
	},
	name: {
		type: String,
		required: true,
		unique: true,
	},
	words: [{
		word: {
			type: String,
			required: true,
		},
		translate: {
			type: String,
			required: true,
		},
		isMemorized: {
			type: Boolean,
			default: false,
		}
	}],
}, {
	id: true,
	toJSON: {
		virtuals: true,
	},
	toObject: {
		virtuals: true,
	},
	versionKey: false,
	virtuals: {
		idTopic: {
			get() {
				return this.topicId.toString();
			}
		}
	}
});

export const Unit = mongoose.model<IUnit>('Unit', UnitSchema);