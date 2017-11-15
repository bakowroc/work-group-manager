import { dropRight, isUndefined, toArray } from 'lodash';
import * as React from 'react';

import { FormProps } from './FormProps';

const styles: any = require('./Form.scss');
export class Form extends React.Component<FormProps> {

  constructor(props: FormProps) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  private onSubmit(event: any) {
    event.preventDefault();
    const elements: any = {};
    toArray(dropRight(event.currentTarget.elements)).map((element: any) => {
      elements[element.name] = element.value;
    });

    this.props.onSubmit(elements);
  }

  public render() {
    let {isSubmitVisible} = this.props;
    isSubmitVisible = isUndefined(isSubmitVisible) ? true : isSubmitVisible;

    return (
      <form
        className={ styles.form }
        onSubmit={ this.onSubmit }
      >
        { this.props.children }
      { isSubmitVisible && <input
        className={ styles.inputButton }
        type="submit"
        value="Submit"
      /> }
      </form>
    );
  }
}
