import { TaskProps } from './Task/TaskProps';

export interface BoardProps {
  tasks: Array<TaskProps>;
  name: string;
  icon?: string;
  slug: any;
}

export interface BoardDispatchProps {
  updateBoardAction: (toUpdateObject: any) => any;
}
