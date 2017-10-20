import * as React from 'react';

import { ButtonProps } from './';

const styles: any = require('./Button.scss');

export class Button extends React.Component<ButtonProps> {

  public state = {
    mouseDown: false
  };

  private getClassName = (): string => {
    const buttonClassName = this.props.flat ? styles.flat : styles.raised;

    return `${styles.button} ${buttonClassName} ${this.props.buttonClassName}`;
  }

  private onMouseDown = (): void => {
    this.setState((prev: any) => ({...prev, mouseDown: true}));
  }

  private onMouseUp = (): void => {
    this.setState((prev: any) => ({...prev, mouseDown: false}));
  }

  public render(): JSX.Element {
    return (
      <div className={ `${styles.content} ${this.props.contentClassName}` }>
        <div
          className={ this.getClassName() }
          onClick={ this.props.onClick }
          onMouseDown={ this.onMouseDown }
          onMouseUp={ this.onMouseUp }
          children={ this.props.label }
        />
        <div className={ this.state.mouseDown ? styles.onMouseDown : '' } />
      </div>
    );
  }
}