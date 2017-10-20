import { TaskState } from '../task/TaskState';

export interface UserState {
  id: number;
  username: string;
  email: string;
  slug: string;
  tasks: Array<TaskState>;
  createdAt: Date;
}
