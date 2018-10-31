

import * as t from '../Constants';
import _ from 'lodash';

export const saveCard = data => {
  if (!_.isObject(data)) throw new Error(`data should be object: ` + data);
  return { type: t.SAVE_USER, data };
};