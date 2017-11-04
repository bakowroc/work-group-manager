import * as React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StatisticsDispatchProps, StatisticsStateProps } from './StatisticsProps';

const styles: any = require('./Statistics.scss');

export class StatisticsComponent extends React.Component<StatisticsStateProps & StatisticsDispatchProps> {

  private statData: Array<any> = [];

  public componentDidMount() {
    this.statData = [
      {
        title: 'Active tasks',
        value: this.props.tasks.length,
        icon: 'tasks'
      },
      {
        title: 'Users',
        value: this.props.users.length,
        icon: 'users'
      },
      {
        title: 'Total time spent',
        value: this.props.tasks.length,
        icon: 'clock-o'
      },
    ];
  }

  private renderStatBox = ({title, value, icon}: any) => (
    <div className={ styles.statBox }>
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
        { this.props && this.statData.map(this.renderStatBox) }
      </div>
    );
  }
}

const mapStateToProps = (state: any): StatisticsStateProps => ({
  users: state.data.users,
  tasks: state.data.tasks,
});

const mapDispatchToProps = (dispatch: any): StatisticsDispatchProps => bindActionCreators({

}, dispatch);

export const Statistics = connect<StatisticsStateProps, StatisticsDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(StatisticsComponent);
