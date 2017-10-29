import * as React from 'react';
import { InputProps } from '../Input/InputProps';
import { CheckboxProps } from './CheckboxProps';

const styles: any = require('./Checkbox.scss');

export class Checkbox extends React.Component<InputProps & CheckboxProps> {

  private onChange = (event: any): void => this.props.onCheck(event.target.checked);

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        <label className={ styles.label }>
          { this.props.label }
        </label>
        <input
          type="checkbox"
          onChange={ this.onChange }
        />
      </div>
    );
  }
}
