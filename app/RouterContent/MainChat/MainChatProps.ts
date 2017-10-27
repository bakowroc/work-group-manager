import { TaskState } from './../../data/task/TaskState';
import { UserState } from './../../data/user/UserState';

export interface MainChatStateProps {
  me: UserState;
  myTasks: Array<TaskState>;
}

export interface MainChatDispatchProps {
  dispatch?: any;
}
