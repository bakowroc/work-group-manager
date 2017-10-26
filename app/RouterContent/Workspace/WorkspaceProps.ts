import { ProjectState } from '../../data/project/ProjectState';
import { BoardState } from './../../data/board/BoardState';

export interface WorkspaceStateProps {
  project: ProjectState;
  boards: Array<BoardState>;
}
