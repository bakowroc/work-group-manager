import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { ProjectState } from './../../../data/project/ProjectState';

export interface AddBoardFormProps {
  isOpen: boolean;
  onSubmit: (data?: any) => void;
}

export interface AddBoardFormStateProps {
  project: ProjectState;
}

export interface AddBoardFormDispatchProps {
  addBoardAction: (payload: any) => void;
  toggleSnackbar: (message: SnackbarMessage) => void;
}
