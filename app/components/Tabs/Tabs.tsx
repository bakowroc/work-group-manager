import * as React from 'react';

import { Menu } from '../Menu';
import { MenuItem } from '../Menu/MenuItem';
import { Switch, TabsProps } from './TabsProps';

const styles: any = require('./Tabs.scss');

export class Tabs extends React.Component<TabsProps> {

  public state = {
    activeSwitch: this.props.items[0].label,
    activeContent: this.props.items[0].content
  };

  private getSwitchClassName = ({label}: Switch): string => {
    const isActiveClass = `${this.state.activeSwitch === label ? this.props.activeSwitchClassName : ''}`;

    return `${styles.switch} ${this.props.switchClassName} ${isActiveClass}`;
  }

  private onContentChange = ({content, label}: Switch): void => {
    this.setState((prev: any) => ({
      ...prev,
      activeSwitch: label,
      activeContent: content
    }));
  }

  private renderSwitches = (): JSX.Element => (
    <Menu listClassName={ `${styles.menu} ${this.props.menuClassName}`}>
      { this.props.items.map((item: Switch, key: number) => (
        <MenuItem
          key={ key }
          labelClassName={ this.getSwitchClassName(item) }
          label={ item.label }
          onClick={ () => this.onContentChange(item) }
        />
      )) }
    </Menu>
  )

  private renderActiveContent = (): JSX.Element => (
    <div className={ `${styles.activeContent} ${this.props.activeContentClassName}` }>
      { this.state.activeContent }
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ `${styles.content} ${this.props.contentClassName}` }>
        { this.renderSwitches() }
        { this.renderActiveContent() }
      </div>
    );
  }
}
