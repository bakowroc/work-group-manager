import * as React from 'react';

const styles: any = require('./Navigation.scss');

export class Navigation extends React.Component<{}> {
  public render(): JSX.Element {
    return(
      <div className={ styles.content }>nav</div>
    );
  }
}
