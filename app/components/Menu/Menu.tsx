import * as React from 'react';
import { Icon } from 'react-fa';
import { NavLink } from 'react-router-dom';

import { MenuItem } from '../../data/MenuItemObject';
import { MenuProps } from './MenuProps';

const styles: any = require('./Menu.scss');

export class Menu extends React.Component<MenuProps> {

  private renderMenuLink = (key: number, content: JSX.Element, {linkTo, labelClassName}: MenuItem): JSX.Element => (
    <NavLink
      key={ key }
      exact={ true }
      activeClassName={ styles.activeListItem }
      className={ labelClassName }
      to={ linkTo }
    >
      { content }
    </NavLink>
  )

  private renderItemIcon = ({icon, iconColor}: MenuItem): JSX.Element => (
    <span className={ `${styles.listItemIcon} ${iconColor}` }>
    <Icon name={ icon } />
  </span>
  )

  private invokeAnchorFunction = ({anchor}: MenuItem) => {
    if (typeof anchor !== `undefined`) {
      return anchor;
    }
  }

  private renderMenuItem = (): Array<JSX.Element> => this.props.items.map(
    (item: MenuItem, key: number) => {
      const template: JSX.Element = (
        <li
          key={ key }
          className={ item.labelClassName }
          onClick={ this.invokeAnchorFunction(item) }
        >
          { item.icon && this.renderItemIcon(item) }
          <span className={ styles.listItemLabel }>
            { item.label }
          </span>
        </li>
      );

      return item.linkTo ? this.renderMenuLink(key, template, item) : template;
    })

  private getMenuClassName = (): string => this.props.vertical ? styles.menuVertical : styles.menuHorizontal;

  public render(): JSX.Element {
    return (
      <div className={ `${styles.content} ${this.props.menuClassName}` }>
        <ul className={ this.getMenuClassName() }>
          { this.renderMenuItem() }
        </ul>
      </div>
    );
  }
}
