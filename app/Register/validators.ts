import { isEmpty, keyBy } from 'lodash';

export const validate = {
  isNotEmpty: (value: string) => !isEmpty(value),
  isUniq: (value: string, set: string, collection: Array<any>): boolean =>
    !Object.keys(keyBy(collection, set)).includes(value)
};
