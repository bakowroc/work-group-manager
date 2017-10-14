import { TaskProps } from './Task/TaskProps';

export interface BoardProps {
  boardColor: string;
  tasks: Array<TaskProps>;
  title: string;
  icon?: string;
}
