import * as React from 'react';
import { Icon } from 'react-fa';
import { NavLink } from 'react-router-dom';

import { MenuItemProps } from './';

const styles: any = require('./MenuItem.scss');

export class MenuItem extends React.Component<MenuItemProps> {
  private renderMenuLink = (template: JSX.Element): JSX.Element => (
    <NavLink
      exact={ true }
      activeClassName={ styles.activeListItem }
      className={ this.props.labelClassName }
      to={ this.props.linkTo }
    >
      { template }
    </NavLink>
  )

  private renderItemIcon = (): JSX.Element => (
    <span className={ `${styles.listItemIcon} ${this.props.iconColor}` }>
    <Icon name={ this.props.icon } />
  </span>
  )

  private renderMenuItem = (): JSX.Element => {
      const template: JSX.Element = (
        <li
          onClick={ this.props.onClick }
          className={ this.props.labelClassName }
        >
          { this.props.icon && this.renderItemIcon() }
          <span className={ styles.listItemLabel }>
            { this.props.label }
          </span>
        </li>
      );

      return this.props.linkTo ? this.renderMenuLink(template) : template;
    }

  public render(): JSX.Element {
    return this.renderMenuItem();
  }
}
