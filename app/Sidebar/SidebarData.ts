import { MenuItem } from '../data/MenuItemObject';

export const MENU_ELEMENTS: Array<MenuItem> = [
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
