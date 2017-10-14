import * as React from 'react';
import { Icon } from 'react-fa';
import { NavLink } from 'react-router-dom';

import { MenuItem } from '../../data/MenuItemObject';
import { MenuProps } from './MenuProps';

const styles: any = require('./Menu.scss');

export class Menu extends React.Component<MenuProps> {

  private renderMenuItem = (item: MenuItem, key: number): JSX.Element => (
    <li key={ key }>
      <NavLink
        exact={ true }
        activeClassName={ styles.activeListItem }
        to={ item.linkTo }
      >
        <span className={ `${styles.listItemIcon} ${item.iconColor}` }>
          <Icon name={ item.icon } />
        </span>
        <span className={ styles.listItemLabel }>
          { item.label }
        </span>
      </NavLink>
    </li>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        <ul>
          { this.props.items.map(this.renderMenuItem) }
        </ul>
      </div>
    );
  }
}
