import { TaskState } from '../../data/task/TaskState';
import { UserState } from '../../data/user/UserState';
import { BoardState } from './../../data/board/BoardState';

export interface MainStateProps {
  users: Array<UserState>;
  tasks: Array<TaskState>;
  boards: Array<BoardState>;
}
