import { Unit } from '@models/Unit.model';

export class UnitRepository {
	constructor(private unitModel = Unit) {}
	async find(topicId: string) {
		const units = await this.unitModel.find({ topicId });
		return units;
	}
}
