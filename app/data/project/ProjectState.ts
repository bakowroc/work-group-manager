import { BoardState } from '../board/BoardState';
import { UserState } from '../user/UserState';

export interface ProjectState {
  id: number;
  name: string;
  description: string;
  boards: Array<BoardState>;
  members: Array<UserState>;
  createdAt: Date;
}
