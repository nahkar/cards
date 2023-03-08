import { UnitDtoResponse } from '@modules/unit/dto/UnitDtoResponse';

import type { IUnit } from '@interfaces/unit.interface';
import type { ITopic } from '@interfaces/topic.interface';

export class GetTopicDtoResponse {
	id: string;
	name: string;
	units: UnitDtoResponse[];

	constructor(model: {topic: ITopic, units: IUnit[]}) {
		this.id = model.topic.id;
		this.name = model.topic.name;
		this.units = model.units.map(unit =>  ({ ...new UnitDtoResponse(unit) }));
	}
}
