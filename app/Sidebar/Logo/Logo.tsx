import * as React from 'react';
import { Icon } from 'react-fa';

const styles: any = require('./Logo.scss');

export class Logo extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
       <Icon name="bandcamp" spin={ true } />
      </div>
    );
  }
}
