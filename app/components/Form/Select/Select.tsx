import * as React from 'react';

import { InputProps } from '../Input/InputProps';
import { SelectProps } from './SelectProps';

const styles: any = require('../Input/Input.scss');

export class Select extends React.Component<InputProps & SelectProps> {

  public state = {
    value: this.props.options[0]
  };

  private onChange = (event: any) => {

    this.setState((prev: any) => ({
      ...prev,
      value: event.currentTarget.value
    }));
  }

  private renderOptions = (): Array<JSX.Element> => this.props.options.map((option: any, key: number) =>
    <option key={ key } value={ option } children={ option }/>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.content } >
        <label className={ styles.label } >{ this.props.label }</label>
        <select
          className={ styles.input }
          name={ this.props.name }
          onChange={ this.onChange }
          value={ this.state.value }
        >
          { this.renderOptions() }
        </select>
      </div>
    );
  }
}
