import * as React from 'react';

import { Menu } from '../Menu';
import { MenuItem } from '../Menu/MenuItem';
import { Switch, TabsProps } from './TabsProps';

const styles: any = require('./Tabs.scss');

export class Tabs extends React.Component<TabsProps> {

  public state = {
    activeSwitch: this.props.items[0].label,
    activeContent: this.props.items[0].content,
  };

  private onContentChange = ({content, label}: Switch): void => {
    this.setState((prev: any) => ({
      ...prev,
      activeSwitch: label,
      activeContent: content
    }));
  }

  private renderSwitches = (): JSX.Element => (
    <Menu>
      { this.props.items.map((item: Switch) => (
        <MenuItem
          labelClassName={ styles.switch }
          label={ item.label }
          onClick={ () => this.onContentChange(item) }
        />
      )) }
    </Menu>
  )

  private renderActiveContent = (): JSX.Element => (
    <div className={ styles.activeContent }>
      { this.state.activeContent }
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        { this.renderSwitches() }
        { this.renderActiveContent() }
      </div>
    );
  }
}
