import { ProjectState } from './../project/ProjectState';
import { TaskState } from './../task/TaskState';

export interface BoardState {
  _id: number;
  name: string;
  icon: string;
  tasks: Array<TaskState>;
  project: ProjectState;
  slug: any;
  createdAt: Date;
}
