export interface MenuItem {
  label: string;
  anchor?: any;
  labelClassName?: string;
  icon?: string;
  iconColor?: IconColor;
  iconClassName?: string;
  linkTo?: string;
}

export enum IconColor {
  BLUE = 'blue',
  RED = 'red',
  ORANGE = 'orange',
  GREEN = 'green'
}
