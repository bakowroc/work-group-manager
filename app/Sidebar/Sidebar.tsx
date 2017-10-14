import * as React from 'react';

import { Menu } from './Menu/Menu';
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
        <Profile
          createdAt={ tempUserProps.createdAt }
          username={ tempUserProps.username }
        />
        <Menu items={ MENU_ELEMENTS } />
      </div>
    );
  }
}
