import * as React from 'react';

const styles: any = require('./Logo.scss');

export class Logo extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
       logo
      </div>
    );
  }
}
