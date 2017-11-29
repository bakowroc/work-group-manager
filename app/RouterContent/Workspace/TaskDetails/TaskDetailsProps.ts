import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { ProjectState } from '../../../data/project/ProjectState';
import { TaskState } from '../../../data/task/TaskState';
import { UserState } from './../../../data/user/UserState';

export interface TaskDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskState;
}

export interface TaskDetailsStateProps {
  me: UserState;
  project: ProjectState;
}

export interface TaskDetailsDispatchProps {
  addChatAction: (payload: any) => void;
  toggleSnackbar: (message: SnackbarMessage) => void;
  deleteTaskAction: (body: any) => void;
  updateTaskAction: (body: any) => void;
  toggleConfirm: (payload: any) => void;
}
