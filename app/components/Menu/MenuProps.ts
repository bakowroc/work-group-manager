import { MenuItem } from './../../data/MenuItemObject';

export interface MenuProps {
  items: Array<MenuItem>;
  vertical?: boolean;
  menuClassName?: string;
}
