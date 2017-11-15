import * as React from 'react';

import { ButtonProps } from './';

const styles: any = require('./Button.scss');

export class Button extends React.Component<ButtonProps> {

  public state = {
    mouseDown: false
  };

  private getClassName = (): string => {
    const buttonClassName = this.props.flat ? styles.flat : styles.raised;
    const isDisabled = this.props.disabled ? styles.disabled : '';

    return `${styles.button} ${buttonClassName} ${this.props.buttonClassName} ${isDisabled}`;
  }

  private onMouseDown = (): void => {
    this.setState((prev: any) => ({...prev, mouseDown: true}));
  }

  private onMouseUp = (): void => {
    this.setState((prev: any) => ({...prev, mouseDown: false}));
  }

  public render(): JSX.Element {
    return (
      <div className={ this.getClassName() }>
        <div
          className={ styles.label }
          onClick={ this.props.onClick }
          onMouseDown={ this.onMouseDown }
          onMouseUp={ this.onMouseUp }
        >
          { this.props.label }
        </div>
        <div className={ this.state.mouseDown ? styles.onMouseDown : '' } />
      </div>
    );
  }
}
