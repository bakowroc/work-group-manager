import { UserState } from '../../../../data/user/UserState';

export interface TaskProps {
  _id: string;
  name: string;
  description: string;
  author: UserState;
  assigned: Array<any>;
  category?: string;
  onDetailsClick?: (task: any) => any;
  prior?: string;
  slug: string;
  isDone: boolean;
}
