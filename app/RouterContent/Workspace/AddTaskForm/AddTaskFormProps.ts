import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { BoardState } from '../../../data/board/BoardState';
import { UserState } from '../../../data/user/UserState';

export interface AddTaskFormProps {
  board: BoardState;
  isOpen: boolean;
  onSubmit: (data?: any) => void;
}

export interface AddTaskFormStateProps {
  me: UserState;
}

export interface AddTaskFormDispatchProps {
  addTaskAction: (task: any) => void;
  toggleSnackbar: (message: SnackbarMessage) => void;
}
