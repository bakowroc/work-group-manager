import * as React from 'react';

const styles: any = require('./Main.scss');

export class Main extends React.Component<{}> {
  public render() {
    return (
      <div className={ styles.content} >
       main
      </div>
    );
  }
}
