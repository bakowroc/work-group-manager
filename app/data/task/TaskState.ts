import { SubtaskState } from '../subtask/SubtaskState';
import { TagState } from '../tag/TagState';
import { UserState } from '../user/UserState';

export interface TaskState {
  id: number;
  name: string;
  description: string;
  author: UserState;
  assigned: Array<UserState>;
  subtasks: Array<SubtaskState>;
  tags: Array<TagState>;
  createdAt: Date;
}
