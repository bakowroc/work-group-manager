import { Dictionary } from 'lodash';
import { BoardState } from '../../data/board/BoardState';
import { ProjectState } from '../../data/project/ProjectState';
import { TaskState } from '../../data/task/TaskState';

export interface WorkspaceStateProps {
  project: ProjectState;
  boards: Array<BoardState>;
  tasks: Dictionary<Array<TaskState>>;
  isAddTaskFormOpen: boolean;
  isAddBoardFormOpen: boolean;
  addTaskAssignedBoard: BoardState;
  isTaskDetailsOpen: boolean;
  currentTaskDetails: TaskState;
}

export interface WorkspaceDispatchProps {
  toggleTaskDetails: (task?: any) => void;
  toggleAddBoardForm: () => void;
  toggleAddTaskForm: (board?: any) => void;
}
