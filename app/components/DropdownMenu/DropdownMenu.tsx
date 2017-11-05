import * as React from 'react';

import { DropdownMenuProps } from './DropdownMenuProps';

const styles: any = require('./DropdownMenu.scss');

export class DropdownMenu extends React.Component<DropdownMenuProps> {
  public render(): JSX.Element {
    return (
      <div className={ `${styles.content} ${this.props.isOpen ? styles.open : styles.close}` }>
        { this.props.children }
      </div>
    );
  }
}
