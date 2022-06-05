import type { IndexSpecification } from 'mongodb';
import type { IStats } from '@rocket.chat/core-typings';
import type { IStatisticsModel } from '@rocket.chat/model-typings';

import { ModelClass } from './ModelClass';

export class StatisticsRaw extends ModelClass<IStats> implements IStatisticsModel {
	protected modelIndexes(): IndexSpecification[] {
		return [{ key: { createdAt: -1 } }];
	}

	async findLast(): Promise<IStats> {
		const options = {
			sort: {
				createdAt: -1,
			},
			limit: 1,
		};
		const records = await this.find({}, options).toArray();
		return records?.[0];
	}
}
