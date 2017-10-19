import * as React from 'react';

import { Popup } from '../Popup';
import { DrawerProps } from './';

const styles: any = require('./Drawer.scss');

export class Drawer extends React.Component<DrawerProps> {

  private renderBodyClassName = (): string => this.props.isOpen ? `${styles.content} ${styles.open}` : styles.content;

  private renderDrawerContent = (): JSX.Element => (
    <div className={ this.renderBodyClassName() }>
      { this.props.body }
    </div>
  )

  public render(): JSX.Element {
    return (
      <Popup
        isOpen={ this.props.isOpen }
        content={ this.renderDrawerContent() }
      />
    );
  }
}
