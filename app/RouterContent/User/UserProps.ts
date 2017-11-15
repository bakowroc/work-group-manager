import { TaskState } from './../../data/task/TaskState';
import { UserState } from './../../data/user/UserState';

export interface UserStateProps {
  me: UserState;
  myTasks: Array<TaskState>;
}

export interface UserDispatchProps {
  updateUserAction: (payload: any) => void;
}
