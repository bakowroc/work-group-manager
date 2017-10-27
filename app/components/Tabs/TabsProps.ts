export interface TabsProps {
  items: Array<Switch>;
}

export interface Switch {
  label: string;
  content: JSX.Element | string;
}
