import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { UserState } from './../../../data/user/UserState';
import { TaskProps } from './Task/TaskProps';

export interface BoardProps {
  _id: any;
  tasks: Array<TaskProps>;
  name: string;
  icon?: string;
  slug: any;
}

export interface BoardDispatchProps {
  updateBoardAction: (toUpdateObject: any) => any;
  updateTaskAction: (toUpdateObject: any) => void;
  openConfirm: (payload: any) => void;
  closeConfirm: () => void;
  toggleAddTaskForm: (board?: any) => void;
  toggleTaskDetails: (task?: any) => void;
  toggleSnackbar: (payload: SnackbarMessage) => void;
  deleteBoardAction: (payload: any) => void;
}

export interface BoardStateProps {
  me: UserState;
}
