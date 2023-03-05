import mongoose, { Schema, Types } from 'mongoose';

export const UnitSchema = new Schema({
	topicId: {
		type: Types.ObjectId,
		ref: 'Topic',
	},
	name: {
		type: String,
		require: true,
	},
	words: [{
		word: {
			type: String,
			required: true,
		},
		translate: {
			type: String,
			require: true,
		},
		isMemorized: {
			type: Boolean,
			default: false,
		}
	}],
});

export const Unit = mongoose.model('Unit', UnitSchema);