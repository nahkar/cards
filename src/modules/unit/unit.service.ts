import { UnitRepository } from './unit.repository';

export class UnitService {
	constructor(private unitRepository = new UnitRepository()) {}

	async getUnits(topicId: string) {
		const units = await this.unitRepository.find(topicId);

		return units;
	}
}
