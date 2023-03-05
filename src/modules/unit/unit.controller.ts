import { UnitService } from './unit.service';

import type { NextFunction, Request, Response } from 'express';

export class UnitController {
	constructor(private unitService = new UnitService()) {}

	async getUnits(req: Request, res: Response, next: NextFunction) {
		try {
			const units = await this.unitService.getUnits(req.params.topicId);

			res.json(units);
		} catch (error) {

			next(error);
		}
	}
}
