import * as React from 'react';

import { Menu } from '../components/Menu/Menu';
import { Logo } from './Logo/Logo';
import { Profile } from './Profile/Profile';
import { ProfileProps } from './Profile/ProfileProps';
import { MENU_ELEMENTS } from './SidebarData';

const styles: any = require('./Sidebar.scss');

const tempUserProps: ProfileProps = {
  createdAt: new Date(),
  username: 'Maciej Bakowicz'
};

export class Sidebar extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        <Logo />
        <Profile
          createdAt={ tempUserProps.createdAt }
          username={ tempUserProps.username }
        />
        <Menu
          vertical={ true }
          items={ MENU_ELEMENTS }
        />
      </div>
    );
  }
}
