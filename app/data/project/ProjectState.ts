import { BoardState } from '../board/BoardState';
import { UserState } from '../user/UserState';

export interface ProjectState {
  _id: number;
  name: string;
  description: string;
  boards: Array<BoardState>;
  members: Array<UserState>;
  createdAt: Date;
}
