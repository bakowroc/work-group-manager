import { TaskPrior } from './TaskPrior';

export interface TaskProps {
  name: string;
  description: string;
  author: string;
  assigned: Array<any>;
  category?: string;
  onDetailsClick?: (task: any) => any;
  prior?: TaskPrior;
}
