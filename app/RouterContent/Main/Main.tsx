import * as React from 'react';
import { connect } from 'react-redux';

import { LogTable } from '../../components/LogTable';
import { Activity } from './Activity/Activity';
import { MainStateProps } from './MainProps';
import { Statistics } from './Statistics/Statistics';

const styles: any = require('./Main.scss');

class MainComponent extends React.Component<MainStateProps> {

  private generateStatData = (): Array<any> => ([
      {
        title: 'Active tasks',
        value: this.props.tasks.length,
        icon: 'check-circle-o'
      },
      {
        title: 'Boards',
        value: this.props.boards.length,
        icon: 'tasks'
      },
      {
        title: 'Users',
        value: this.props.users.length,
        icon: 'users'
      }
  ])

  private generateTasksLogData = (): any => ({
    keys: ['name', 'prior', 'createdAt'],
    data: this.props.tasks
  })

  private generateUsersLogData = (): any => ({
    keys: ['username', 'createdAt'],
    data: this.props.users
  })

  public render() {
    return (
      <div className={ styles.content} >
        <div className={ styles.infoContent }>
          <div className={ styles.mainStatsContent }>
            <Statistics data={ this.generateStatData() } />
          </div>
          <div className={ styles.mainActivityContent }>
            <Activity
              content={ <LogTable data={ this.generateTasksLogData() } />}
              linkTo="/workspace"
              width="2col"
            />
            <Activity
              content={ <LogTable data={ this.generateUsersLogData() } />}
              linkTo="/users"
              width="1col"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): MainStateProps => ({
  users: state.data.users,
  tasks: state.data.tasks,
  boards: state.data.boards
});

export const Main = connect<MainStateProps, any, any>(
  mapStateToProps
)(MainComponent);
