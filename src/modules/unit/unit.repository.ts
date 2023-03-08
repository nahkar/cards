import { Unit } from '@models/Unit.model';

import type { UnitDtoRequest } from './dto/UnitDtoRequest';

export class UnitRepository {
	constructor(private unitModel = Unit) {}
	async find(topicId: string) {
		const units = await this.unitModel.find({ topicId });
		return units;
	}

	async create(unit:UnitDtoRequest) {
		const created = await this.unitModel.create(unit);
		return created;
	}
}
