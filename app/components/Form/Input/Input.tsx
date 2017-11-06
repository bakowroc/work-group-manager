import * as React from 'react';

import { InputProps } from './InputProps';

const styles: any = require('./Input.scss');

export class Input extends React.Component<InputProps> {

  public state = {
    value: '',
    isFocused: false
  };

  private onChange = (event: any) => {
    this.setState((prev: any) => ({
      ...prev,
      value: event.currentTarget.value
    }));
  }

  public render(): JSX.Element {
    return (
      <div className={ styles.content } >
        <label className={ styles.label } >{ this.props.label }</label>
        <input
          type={ this.props.type || 'input' }
          className={ styles.input }
          name={ this.props.name }
          onChange={ this.onChange }
          value={ this.state.value }
          placeholder={ this.props.placeholder || '' }
        />
      </div>
    );
  }
}
