import { TaskState } from './../../../data/task/TaskState';
import { UserState } from './../../../data/user/UserState';

export interface StatisticsStateProps {
  users: Array<UserState>;
  tasks: Array<TaskState>;
}
export interface StatisticsDispatchProps {
  a?: any;
}
