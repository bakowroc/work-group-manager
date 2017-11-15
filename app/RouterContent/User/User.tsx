import * as React from 'react';
import { connect } from 'react-redux';

import { NameList } from '../../components/NameList';
import { NameListItem } from '../../components/NameList/NameListItem';
import { Tabs } from '../../components/Tabs/Tabs';
import { Switch } from '../../components/Tabs/TabsProps';
import { getMyTasks } from '../../data/selectors/dataSelectors';
import { Task } from '../Workspace/Board/Task/Task';
import { UserDispatchProps, UserStateProps } from './UserProps';

const styles: any = require('./User.scss');

class UserComponent extends React.Component<UserStateProps & UserDispatchProps> {

  private renderBasicUserInfo = (): JSX.Element => (
    <div className={ styles.userInfo }>
      <div className={ styles.background } />
      <div className={ styles.userMain }>
        <div className={ styles.username }>
          { this.props.me.username }
        </div>
        <div className={ styles.email }>
          { this.props.me.email }
        </div>
        <div className={ styles.avatar }>
          { this.props.me.username[0] }
        </div>
      </div>
      <div  className={ styles.info }>
        <NameList>
          <NameListItem
            label="Tasks Im an author"
            value={ this.props.myTasks.length }
          />
          <NameListItem
            label="Tasks Im an assignee"
            value={ this.props.myTasks.length }
          />
        </NameList>
      </div>
    </div>
  )

  private getTabs = (): Array<Switch> => ([
    {
      label: 'All tasks',
      content: this.renderTaskList('')
    },
    {
      label: 'Active only',
      content: this.renderTaskList('isDone', false)
    },
    {
      label: 'Finished',
      content: this.renderTaskList('isDone')
    }
  ])

  private renderTaskList = (filter: string, mark: boolean = true): Array<JSX.Element> =>
    this.props.myTasks
      .filter((e: any) => {
        if (filter.length > 0) {
          if (mark) {
            return e[filter];
          } else {
            return !e[filter];
          }
        } else {
          return e;
        }
      })
      .map((props, key) =>
        <Task key={ key } { ...props } />)

  private renderTabs = (): JSX.Element => (
    <div className={ styles.tabs }>
      <Tabs
        items={ this.getTabs() }
        activeSwitchClassName={ styles.activeSwitch }
        activeContentClassName={ styles.activeContent }
        switchClassName={ styles.switch }
        menuClassName={ styles.switchMenu }
        contentClassName={ styles.tabContent }
      />
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        { this.renderBasicUserInfo() }
        { this.renderTabs() }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  me: state.users.me,
  myTasks: getMyTasks(state)
});

export const User = connect<UserStateProps, UserDispatchProps, any>(
  mapStateToProps,
  null
)(UserComponent);
