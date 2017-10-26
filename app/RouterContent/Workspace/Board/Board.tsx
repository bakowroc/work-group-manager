import * as React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../../../components/Button';
import { InputEdit } from '../../../components/InputEdit';
import { updateBoardAction } from '../../../utils/axios/requests/BoardActions';
import { addTaskAction } from '../../../utils/axios/requests/TaskActions';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { toggleAddTaskForm } from './AddTaskForm/addTaskForm.duck';
import { BoardDispatchProps, BoardProps, BoardStateProps } from './BoardProps';
import { Task } from './Task/Task';
import { TaskProps } from './Task/TaskProps';
import { TaskDetails } from './TaskDetails/TaskDetails';
import { toggleTaskDetails } from './TaskDetails/taskDetails.duck';

const styles: any = require('./Board.scss');

export class BoardComponent extends React.Component<BoardProps & BoardDispatchProps & BoardStateProps> {

  private onTitleInputLeave = (value: string): void => {
    const updateBoardBody = {
      slug: this.props.slug,
      data: {name: value}
    };
    this.props.updateBoardAction(updateBoardBody);
  }

  private onAddTask = (): void => this.props.toggleAddTaskForm(this.props);

  private renderBoardIcon = (): JSX.Element => (
    <span className={ styles.titleIcon }>
      <Icon name={ this.props.icon || 'check' } />
    </span>
  )

  private renderBoardTitle = (): JSX.Element => (
    <div className={ styles.title }>
      { this.renderBoardIcon() }
      <InputEdit
        text={ this.props.name }
        onLeave={ this.onTitleInputLeave }
        useEnterToLeave={ true }
        inputClassName={ styles.text }
        maxInputLength={ 20 }
      />
    </div>
  )

  private renderWorkspaceTasks = (): Array<JSX.Element> =>
    this.props.tasks.map((taskProps: TaskProps, key: number) => (
      <Task
        key={ key }
        onDetailsClick={ this.props.toggleTaskDetails }
        { ...taskProps }
      />
    ))

  private renderNoTasksInfo = (): JSX.Element => (
    <div className={ styles.noTasksInfo } >
      <span>No task assigned to this board.</span>
      <span>Drag it here or create one!</span>
    </div>
  )

  private renderAddTask = (): JSX.Element => (
    <div className={ styles.addTaskButton }>
      <Button
        label="Add task"
        onClick={ this.onAddTask }
        flat={ false }
      />
    </div>
  )

  private renderTasksBoard = (): JSX.Element => (
    <div className={ styles.tasks }>
      { this.props.tasks
      ? this.renderWorkspaceTasks()
      : this.renderNoTasksInfo() }
      { this.renderAddTask() }
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        { this.props.name && this.renderBoardTitle() }
        { this.renderTasksBoard() }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  me: state.data.me
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  addTaskAction,
  updateBoardAction,
  toggleAddTaskForm,
  toggleTaskDetails
}, dispatch);

export const Board = connect<BoardStateProps, BoardDispatchProps, BoardProps>(
  mapStateToProps,
  mapDispatchToProps
)(BoardComponent);
