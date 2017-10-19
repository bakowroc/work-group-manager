import * as React from 'react';

import { Menu } from '../components/Menu';
import { MenuItem, MenuItemProps } from '../components/Menu/MenuItem';
import { Logo } from './Logo/Logo';
import { Profile } from './Profile/Profile';
import { MENU_ELEMENTS } from './SidebarData';

const styles: any = require('./Sidebar.scss');

export class Sidebar extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        <Logo />
        <Profile />
        <Menu vertical={ true }>
          { MENU_ELEMENTS.map((menuItemProps: MenuItemProps, key: number) => <MenuItem key={ key } { ...menuItemProps } />) }
        </Menu>
      </div>
    );
  }
}
