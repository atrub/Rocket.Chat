import { IndexSpecification } from 'mongodb';
import type { Cursor, FindOneOptions, InsertOneWriteOpResult, UpdateWriteOpResult, WithId, WithoutProjection } from 'mongodb';
import { ICustomUserStatus } from '@rocket.chat/core-typings';
import type { ICustomUserStatusModel } from '@rocket.chat/model-typings';

import { ModelClass } from './ModelClass';

export class CustomUserStatusRaw extends ModelClass<ICustomUserStatus> implements ICustomUserStatusModel {
	protected modelIndexes(): IndexSpecification[] {
		return [{ key: { name: 1 } }];
	}

	// find one by name

	async findOneByName(name: string, options?: undefined): Promise<ICustomUserStatus | null>;

	async findOneByName(name: string, options?: WithoutProjection<FindOneOptions<ICustomUserStatus>>): Promise<ICustomUserStatus | null> {
		return options ? this.findOne({ name }, options) : this.findOne({ name });
	}

	// find
	findByName(name: string, options: WithoutProjection<FindOneOptions<ICustomUserStatus>>): Cursor<ICustomUserStatus> {
		const query = {
			name,
		};

		return this.find(query, options);
	}

	findByNameExceptId(
		name: string,
		except: string,
		options: WithoutProjection<FindOneOptions<ICustomUserStatus>>,
	): Cursor<ICustomUserStatus> {
		const query = {
			_id: { $nin: [except] },
			name,
		};

		return this.find(query, options);
	}

	// update
	setName(_id: string, name: string): Promise<UpdateWriteOpResult> {
		const update = {
			$set: {
				name,
			},
		};

		return this.updateOne({ _id }, update);
	}

	setStatusType(_id: string, statusType: string): Promise<UpdateWriteOpResult> {
		const update = {
			$set: {
				statusType,
			},
		};

		return this.updateOne({ _id }, update);
	}

	// INSERT
	create(data: ICustomUserStatus): Promise<InsertOneWriteOpResult<WithId<ICustomUserStatus>>> {
		return this.insertOne(data);
	}
}
