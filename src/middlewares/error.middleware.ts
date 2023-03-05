import { ApiError } from '@exceptions/ApiError';
import httpStatus from 'http-status';
import mongoose from 'mongoose';

import type { NextFunction, Request, Response } from 'express';

export const apiErrorMiddleware = (err: ApiError | mongoose.Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err);

	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message, errors: err.errors });
	}

	if (err instanceof mongoose.Error) {
		return res.status(httpStatus.BAD_REQUEST).json({ message: err.message });
	}

	return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Server Error' });
};
