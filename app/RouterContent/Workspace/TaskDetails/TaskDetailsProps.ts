import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { TaskState } from '../../../data/task/TaskState';
import { UserState } from './../../../data/user/UserState';

export interface TaskDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskState;
}

export interface TaskDetailsStateProps {
  me: UserState;
}

export interface TaskDetailsDispatchProps {
  toggleSnackbar: (message: SnackbarMessage) => void;
  deleteTaskAction: (body: any) => void;
  updateTaskAction: (body: any) => void;
  toggleConfirm: (payload: any) => void;
}
