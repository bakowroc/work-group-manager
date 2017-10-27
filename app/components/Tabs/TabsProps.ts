export interface TabsProps {
  items: Array<Switch>;
  contentClassName?: string;
  switchClassName?: string;
  activeSwitchClassName: string;
  menuClassName?: string;
}

export interface Switch {
  label: string;
  content: any;
}
