import { TopicRepository } from '@modules/topic/topic.repository';
import { Types } from 'mongoose';
import { ApiError } from '@exceptions/ApiError';

import { UnitRepository } from './unit.repository';

import type { UnitDtoRequest } from './dto/UnitDtoRequest';

export class UnitService {
	constructor(private topicRepository = new TopicRepository, private unitRepository = new UnitRepository()) {}

	async getUnits(topicId: string) {
		const units = await this.unitRepository.find(topicId);

		return units;
	}

	async createUnit(unit: UnitDtoRequest) {
		const isTopicExist = await this.topicRepository.isExist({ _id: new Types.ObjectId(unit.idTopic) });
		if(!isTopicExist ){
			throw ApiError.BadRequest(`Topic ${unit.idTopic} doesn't exist`);
		}
		const created = await this.unitRepository.create(unit);
		return created;
	}
}
