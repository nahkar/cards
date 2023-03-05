import mongoose from 'mongoose';

export const connectToDatabase = async () => {
	try {
		mongoose.set('strictQuery', true);

		await mongoose.connect(process.env.MONGODB_URI ?? '');
		
	} catch (error) {
		console.log(error);
	}
};
