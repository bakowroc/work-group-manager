import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { TaskState } from '../../../data/task/TaskState';

export interface TaskDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskState;
}

export interface TaskDetailsDispatchProps {
  toggleSnackbar: (message: SnackbarMessage) => void;
  deleteTaskAction: (body: any) => void;
  updateTaskAction: (body: any) => void;
  toggleConfirm: () => void;
}
