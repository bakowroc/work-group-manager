export interface MenuItem {
  label: string;
  anchor?: string;
  className?: string;
  icon: string;
  iconColor?: IconColor;
  linkTo?: string;
}

export enum IconColor {
  BLUE = 'blue',
  RED = 'red',
  ORANGE = 'orange',
  GREEN = 'green'
}
