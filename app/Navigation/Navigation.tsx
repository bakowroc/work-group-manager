import * as React from 'react';

import { NavigationProps } from './NavigationProps';

const styles: any = require('./Navigation.scss');

export class Navigation extends React.Component<NavigationProps> {

  private renderNavigationClass = (): string =>
    this.props.primary ? `${styles.content} ${styles.primary}` : styles.content

  public render(): JSX.Element {
    return(
      <div className={ this.renderNavigationClass()  }>
        sas
      </div>
    );
  }
}
