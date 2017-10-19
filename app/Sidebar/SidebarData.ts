import { MenuItemProps } from '../components/Menu/MenuItem';

export const MENU_ELEMENTS: Array<MenuItemProps> = [
  {
    icon: 'eye',
    label: 'Main',
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
  },
  {
    icon: 'cog',
    label: 'Settings',
    linkTo: '/setings'
  }
];
