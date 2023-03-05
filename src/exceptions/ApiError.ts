import { ValidationError } from 'express-validator';
import HTTPStatus from 'http-status';

export class ApiError extends Error {
	status;
	errors;

	constructor(status: number, message: string, errors: ValidationError[] = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static BadRequest(message: string, errors: ValidationError[] = []) {
		return new ApiError(HTTPStatus.BAD_REQUEST, message, errors);
	}
}
