import * as React from 'react';

import { NameListItemProps } from './NameListItemProps';

const styles: any = require('./NameListItem.scss');

export class NameListItem extends React.Component<NameListItemProps> {
  public render(): JSX.Element {
    return (
      <li className={ styles.content }>
        <span className={ styles.label }>
          { this.props.label }
        </span>
        <span className={ styles.value }>
          { this.props.value }
        </span>
      </li>
    );
  }
}
