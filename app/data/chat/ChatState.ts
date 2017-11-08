import { ProjectState } from './../project/ProjectState';
import { UserState } from './../user/UserState';

export interface ChatState {
  _id: string;
  name: string;
  description: string;
  messages: Array<any>;
  members: Array<UserState>;
  project: ProjectState;
  createdAt: Date;
  slug: string;
}
