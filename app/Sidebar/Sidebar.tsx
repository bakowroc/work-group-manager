import * as React from 'react';

import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { MenuItem, MenuItemProps } from '../components/Menu/MenuItem';
import { socketMiddleware } from '../middleware/socket';
import { logout } from '../utils/axios/parsers/query';
import { Profile } from './Profile/Profile';
import { MENU_ELEMENTS } from './SidebarData';

const styles: any = require('./Sidebar.scss');

export class Sidebar extends React.Component<{}> {

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        <Profile />
        <Menu vertical={ true }>
          { MENU_ELEMENTS.map((menuItemProps: MenuItemProps, key: number) =>
            <MenuItem key={ key } { ...menuItemProps } />) }
        </Menu>
        <div className={ styles.logoutButton }>
          <Button
            label="Logout"
            onClick={ logout }
            flat={ true }
            buttonClassName={ styles.button }
          />
        </div>
      </div>
    );
  }
}
