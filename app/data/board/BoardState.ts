import { TaskState } from './../task/TaskState';

export interface BoardState {
  id: number;
  name: string;
  icon: string;
  tasks: Array<TaskState>;
  createdAt: Date;
}
