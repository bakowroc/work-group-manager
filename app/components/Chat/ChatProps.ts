import { TaskProps } from './../../RouterContent/Workspace/Board/Task/TaskProps';

export interface ChatProps {
  chatClassName?: string;
  inputClassName?: string;
  titleClassName?: string;
  historyClassName?: string;
  relatedToTask: TaskProps;
  title: string;
}
