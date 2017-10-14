import * as React from 'react';

const styles: any = require('./Workspace.scss');

export class Workspace extends React.Component<{}> {
  public render() {
    return (
      <div className={ styles.content} >
        workspace
      </div>
    );
  }
}
