import * as React from 'react';

import { Menu } from '../components/Menu/Menu';
import { MenuItem } from '../data/MenuItemObject';
import { NavigationProps } from './NavigationProps';

const styles: any = require('./Navigation.scss');

const invokeAdjustAnchor = () => alert();

const NAVIGATION_ITEMS: Array<MenuItem> = [
  {
    label: 'Work group manager',
    labelClassName: styles.projectNameLabel
  }
];

export class Navigation extends React.Component<NavigationProps> {

  private getNavigationClass = (): string =>
    this.props.primary ? `${styles.content} ${styles.primary}` : styles.content

  private appendAnchorElements = (): Array<MenuItem> => [
    ...NAVIGATION_ITEMS,
    {
      anchor: invokeAdjustAnchor,
      icon: 'bell',
      label: '',
      labelClassName: styles.iconButton
    }
  ]

  public render(): JSX.Element {
    return(
      <div className={ this.getNavigationClass()  }>
        <Menu
          menuClassName={ styles.menu }
          items={ this.appendAnchorElements() }
        />
      </div>
    );
  }
}
