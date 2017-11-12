import * as React from 'react';

import { InputEditProps } from './InputEditProps';

const styles: any = require('./InputEdit.scss');

export class InputEdit extends React.Component<InputEditProps> {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  public state = {
    isFocused: false,
    value: ''
  };

  public componentDidMount() {
    const value = this.props.text ? this.props.text : '';
    this.setState((prev: any) => ({
      ...prev,
      value
    }));
  }

  private onKeyPress = (event: any): void => {
    if (this.props.useEnterToLeave && event.key === 'Enter') {
      event.currentTarget.blur();
    }
  }

  private onFocus = (): void => {
    this.setState((prev: any) => ({
      ...prev,
      isFocused: true
    }));
  }

  private onChange = (event: any): void => {
    const maxLength = this.props.maxInputLength ? this.props.maxInputLength : 270;
    const isTooMuchLetters = event.currentTarget.value.length < maxLength;
    if (isTooMuchLetters) {
      this.setState((prev: any) => ({
        ...prev,
        value: event.currentTarget.value
      }));
    }
  }

  private onBlur = (event: any): void => {
    this.setState((prev: any) => ({
      isFocused: false
    }));

    this.props.onLeave(event.currentTarget.value);

    if (this.props.eraseOnLeave) {
      event.currentTarget.value = null;
    }
  }

  private getInputClassName = (): string => {
    const focused = this.state.isFocused ? styles.focused : '';

    return `${styles.input} ${this.props.inputClassName} ${focused}`;
  }

  public render(): JSX.Element {
    return (
      <textarea
        className={ this.getInputClassName() }
        value={ this.state.value }
        onChange={ this.onChange }
        onFocus={ this.onFocus }
        onBlur={ this.onBlur }
        onKeyPress={ this.onKeyPress }
      />
    );
  }
}
