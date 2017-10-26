import { TaskState } from '../../../data/task/TaskState';

export interface TaskDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskState;
}
