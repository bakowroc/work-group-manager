import { ProjectState } from '../../data/project/ProjectState';
import { TaskState } from '../../data/task/TaskState';
import { BoardState } from './../../data/board/BoardState';
import { toggleAddTaskForm } from './Board/AddTaskForm/addTaskForm.duck';

export interface WorkspaceStateProps {
  project: ProjectState;
  boards: Array<BoardState>;
  isAddTaskFormOpen: boolean;
  addTaskAssignedBoard: BoardState;
  isTaskDetailsOpen: boolean;
  currentTaskDetails: TaskState;
}

export interface WorkspaceDispatchProps {
  toggleTaskDetails: (task?: any) => void;
  toggleAddTaskForm: (board?: any) => void;
}
