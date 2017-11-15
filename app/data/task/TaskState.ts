import { ChatState } from '../chat/ChatState';
import { SubtaskState } from '../subtask/SubtaskState';
import { TagState } from '../tag/TagState';
import { UserState } from '../user/UserState';

export interface TaskState {
  _id: string;
  name: string;
  description: string;
  author: UserState;
  assigned: Array<UserState>;
  subtasks: Array<SubtaskState>;
  slug: string;
  tags: Array<TagState>;
  prior: string;
  createdAt: Date;
  isDone: boolean;
  chat: ChatState;
}
