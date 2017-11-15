import { MenuItemProps } from '../components/Menu/MenuItem';

export const MENU_ELEMENTS: Array<MenuItemProps> = [
  {
    icon: 'user',
    label: 'Profile',
    linkTo: '/user'
  },
  {
    icon: 'eye',
    label: 'Dashboard',
    linkTo: '/'
  },
  {
    icon: 'database',
    label: 'Workspace',
    linkTo: '/workspace'
  },
  {
    icon: 'comment-o',
    label: 'Chat',
    linkTo: '/chat'
  }
];
