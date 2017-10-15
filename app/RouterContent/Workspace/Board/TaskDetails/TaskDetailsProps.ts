import { TaskProps } from '../Task/TaskProps';

export interface TaskDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskProps;
}
