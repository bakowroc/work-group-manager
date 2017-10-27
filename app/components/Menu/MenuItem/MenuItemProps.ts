export interface MenuItemProps {
  label: string | JSX.Element;
  labelClassName?: string;
  icon?: string;
  iconColor?: IconColor;
  iconClassName?: string;
  linkTo?: string;
  onClick?: () => void;
}

export enum IconColor {
  BLUE = 'blue',
  RED = 'red',
  ORANGE = 'orange',
  GREEN = 'green'
}
