import { registerModel } from '@rocket.chat/models';
import type { ISubscriptionsModel } from '@rocket.chat/model-typings';

import { trashCollection } from '../database/trash';
import MeteorModel from '../../app/models/server/models/Subscriptions';
import { SubscriptionsRaw } from './raw/Subscriptions';

const col = MeteorModel.model.rawCollection();
export const Subscriptions = new SubscriptionsRaw(col, { Users }, trashCollection);
registerModel('ISubscriptionsModel', Subscriptions as ISubscriptionsModel);
