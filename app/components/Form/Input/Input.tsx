import * as React from 'react';

import { InputProps } from './InputProps';

export class Input extends React.Component<InputProps> {

  public state = {
    value: ''
  };

  private onChange = (event: any) => {
    this.setState((prev: any) => ({
      ...prev,
      value: event.currentTarget.value
    }));
  }

  public render(): JSX.Element {
    return (
      <div>
        <label>{ this.props.label }</label>
        <input
          name={ this.props.name }
          onChange={ this.onChange }
          value={ this.state.value }
          placeholder={ this.props.placeholder || '' }
        />
      </div>
    );
  }
}
