import { BoardProps } from './Board/BoardProps';

export const BOARDS_DATA: Array<BoardProps> = [
  {
    boardColor: 'red',
    tasks: [
      {
        assigned: [],
        author: 'Maciej Bakowicz',
        desc: 'We need to keep our home clean and soft!',
        title: 'Vacuum entire house',
      },
      {
        assigned: [],
        author: 'Maciej Bakowicz',
        desc: 'In case our release candidate is gonna be ready we need to prepare jenkins',
        title: 'Recreate our jenkins',
      },
    ],
    title: 'Backlog'
  },
  {
    boardColor: 'green',
    icon: 'calendar',
    tasks: [
      {
        assigned: [],
        author: 'Maciej Bakowicz',
        category: 'Buisness',
        desc: 'Some description',
        title: 'Add some stuff',
      },
      {
        assigned: [],
        author: 'Maciej Bakowicz',
        desc: 'Some description',
        title: 'Add some better stuff',
      },
    ],
    title: 'To do'
  },
  {
    boardColor: 'blue',
    icon: 'comment-o',
    tasks: [
      {
        assigned: [],
        author: 'Maciej Bakowicz',
        category: 'Webdesign',
        desc: 'Some description',
        title: 'Add some stuff',
      },
      {
        assigned: [],
        author: 'Maciej Bakowicz',
        category: 'Webdevelopment',
        desc: 'Some description',
        title: 'Add some better stuff',
      },
    ],
    title: 'To review'
  },
  {
    boardColor: 'red',
    icon: 'bug',
    tasks: [],
    title: 'Bugs'
  }
];
