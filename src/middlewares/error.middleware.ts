import { ApiError } from '@exceptions/ApiError';
import httpStatus from 'http-status';

import type { NextFunction, Request, Response } from 'express';

export const apiErrorMiddleware = (err: ApiError | Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message, errors: err.errors });
	}

	return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
};
