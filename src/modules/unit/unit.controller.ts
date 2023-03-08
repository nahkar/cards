import httpStatus from 'http-status';

import { UnitDtoRequest } from './dto/UnitDtoRequest';
import { UnitDtoResponse } from './dto/UnitDtoResponse';
import { UnitService } from './unit.service';

import type { NextFunction, Request, Response } from 'express';

export class UnitController {
	constructor(private unitService = new UnitService()) {}

	async getUnits(req: Request, res: Response, next: NextFunction) {
		try {
			const units = await this.unitService.getUnits(req.params.topicId);

			res.json(units.map(unit => ({ ...new UnitDtoResponse(unit) })));
		} catch (error) {

			next(error);
		}
	}

	async createUnit(req: Request, res: Response, next: NextFunction) {
		try {
			const unit = await this.unitService.createUnit(new UnitDtoRequest(req.body));
			res.status(httpStatus.CREATED).json(new UnitDtoResponse(unit));
		} catch (error) {

			next(error);
		}
	}
}
