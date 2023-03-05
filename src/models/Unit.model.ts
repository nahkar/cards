import { Model, Schema } from 'mongoose';

const UnitSchema = new Schema({
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
});

export const UnitModel = new Model('Unit', UnitSchema);