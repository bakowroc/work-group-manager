export interface TaskProps {
  title: string;
  desc: string;
  author: string;
  assigned: Array<any>;
  category?: string;
  onDetailsClick?: (task: any) => any;
}
