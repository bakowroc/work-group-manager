import { isUndefined } from 'lodash';

export const fillCollection = (collection: Array<any>) => collection.map((element: any) => element._id);
export const getDifferences = (base: Array<any>, diff: Array<any>, diffBy: string): Array<any> =>
  diff.map((el: any, index: number) => {
    if (el[diffBy] !== base[index][diffBy]) {
      return el;
    }
  });
