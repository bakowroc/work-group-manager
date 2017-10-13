import * as React from 'react';

const styles: any = require('./AppContainer.scss');

export class AppContainer extends React.Component<{}> {
  public render() {
    return (
      <div className={ 'someClass' }>
        Text
        { styles }
      </div>
    );
  }
}
