import * as React from 'react';

import { DropdownItemProps } from './DropdownItemProps';

const styles: any = require('./DropdownItem.scss');

export class DropdownItem extends React.Component<DropdownItemProps> {
  public render(): JSX.Element {
    return (
      <div
        className={ styles.content }
        onClick={ this.props.onClick }
      >
        { this.props.label }
      </div>
    );
  }
}
