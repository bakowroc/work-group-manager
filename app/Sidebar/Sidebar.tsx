import * as React from 'react';

import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { MenuItem, MenuItemProps } from '../components/Menu/MenuItem';
import { logout } from '../utils/axios/parsers/query';
import { Profile } from './Profile/Profile';
import { MENU_ELEMENTS } from './SidebarData';
import { socketMiddleware } from '../middleware/socket';

const styles: any = require('./Sidebar.scss');

export class Sidebar extends React.Component<{}> {

  private emit = () => {
    console.log('calling emitter');
    socketMiddleware.emit('input', [{dupa: 'dddd'}]);
  }
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
          <Button
            label="Emit"
            onClick={ this.emit }
            flat={ true }
            buttonClassName={ styles.button }
          />
        </div>
      </div>
    );
  }
}
