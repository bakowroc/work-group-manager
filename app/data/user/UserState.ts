import { TaskState } from '../task/TaskState';

export interface UserState {
  _id: number;
  username: string;
  email: string;
  slug: string;
  tasks: Array<TaskState>;
  createdAt: Date;
}
