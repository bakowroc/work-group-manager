import { toString } from 'lodash';

export const createReqQuery = (data: Array<any>, key: string): string =>
  '?' + toString(data.map((item: any) => `${key}=${item._id}`)).replace(/,/g, '&');
