import * as React from 'react';
import { PopupProps } from './PopupProps';
import { Icon } from 'react-fa';

const styles: any = require('./Popup.scss');

export class Popup extends React.Component<PopupProps> {
  public render(): JSX.Element {
    return (
      <div className={ this.props.isOpen ? styles.opened : styles.closed  }>
        <div className={ styles.overflowContentBody }>
          <div className={ styles.content }>
            { this.props.content }
          </div>
        </div>
      </div>
    );
  }
}