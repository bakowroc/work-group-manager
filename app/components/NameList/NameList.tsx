import * as React from 'react';

const styles: any = require('./NameList.scss');

export class NameList extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <ul className={ styles.content }>
        { this.props.children }
      </ul>
    );
  }
}
