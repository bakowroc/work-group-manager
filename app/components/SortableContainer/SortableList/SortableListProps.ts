export interface SortableListProps {
  handle?: HTMLElement;
  listElementId: string;
  onSortFinish: (data?: any) => void;
  items: Array<JSX.Element>;
  noDataInfo: JSX.Element | string;
  onListChange: (data?: any) => void;
}
