import * as React from 'react';
import { Icon } from 'react-fa';

import { StatisticsProps } from './StatisticsProps';

const styles: any = require('./Statistics.scss');

export class Statistics extends React.Component<StatisticsProps> {

  private renderStatBox = ({title, value, icon, key}: any) => (
    <div className={ styles.statBox } key={ key }>
      <div className={ styles.title }>
        { title }
      </div>
      <div className={ styles.value }>
        { value }
      </div>
      <div className={ styles.icon }>
        <Icon name={ icon } />
      </div>
  </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        { this.props.data.map(this.renderStatBox) }
      </div>
    );
  }
}
