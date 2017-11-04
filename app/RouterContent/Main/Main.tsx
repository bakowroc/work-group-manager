import * as React from 'react';

import { Statistics } from './Statistics/Statistics';

const styles: any = require('./Main.scss');

export class Main extends React.Component<{}> {
  public render() {
    return (
      <div className={ styles.content} >
       <Statistics />
      </div>
    );
  }
}
