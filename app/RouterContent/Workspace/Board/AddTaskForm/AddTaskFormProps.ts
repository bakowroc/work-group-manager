import { BoardProps } from './../BoardProps';

export interface AddTaskFormProps {
  board: BoardProps;
  isOpen: boolean;
  onSubmit: (data: any) => void;
}
