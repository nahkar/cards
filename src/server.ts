import express from 'express';
import cors from 'cors';
// import dotenv from 'dotenv';
import { apiErrorMiddleware } from '@middlewares/error.middleware';
import { connectToDatabase } from '@helpers/db.helper';
import { router } from '@routes/v1';
import mongoose from 'mongoose';
import config  from 'config';

// dotenv.config();
console.log(process.env.NODE_ENV, config.get('port'));

const PORT:number = Number(process.env.PORT );

const app = express();

connectToDatabase();

app.use(
	cors({
		credentials: true,
		origin: process.env.CLIENT_URL,
	})
);
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ message: 'Auth API, please go to /api/v1/' });
});

app.use('/api/v1', router);

app.use(apiErrorMiddleware);


mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB');
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});