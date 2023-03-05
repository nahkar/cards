import mongoose, { Types } from 'mongoose';

const TopicSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	unitIds: [{
		type: Types.ObjectId,
		ref: 'Unit'
	}],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export const Topic = mongoose.model('Topic', TopicSchema);
