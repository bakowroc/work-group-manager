import * as React from 'react';

import { Button } from '../Button/Button';
import { ButtonProps } from '../Button/ButtonProps';

const styles: any = require('./FloatingButton.scss');

export class FloatingButton extends React.Component<ButtonProps> {
  public render(): JSX.Element {
    return (
      <Button
        { ...this.props }
        buttonClassName={ `${this.props.buttonClassName} ${styles.buttonClassName}` }
      />
    );
  }
}
