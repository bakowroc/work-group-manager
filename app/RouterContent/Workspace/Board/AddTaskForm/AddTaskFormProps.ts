import { BoardState } from './../../../../data/board/BoardState';
import { UserState } from './../../../../data/user/UserState';

export interface AddTaskFormProps {
  board: BoardState;
  isOpen: boolean;
  onSubmit: () => void;
}

export interface AddTaskFormStateProps {
  me: UserState;
}

export interface AddTaskFormDispatchProps {
  addTaskAction: (data: any) => void;
}
