import * as React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../../../components/Button';
import { InputEdit } from '../../../components/InputEdit';
import { updateBoardAction } from '../../../utils/axios/requests/BoardActions';
import { addTaskAction } from '../../../utils/axios/requests/TaskActions';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { BoardDispatchProps, BoardProps } from './BoardProps';
import { Task } from './Task/Task';
import { TaskProps } from './Task/TaskProps';
import { TaskDetails } from './TaskDetails/TaskDetails';

const styles: any = require('./Board.scss');

export class BoardComponent extends React.Component<BoardProps & BoardDispatchProps> {

  public state = {
    currentTaskDetails: this.props.tasks[1],
    isDetailsOpen: false,
    isAddTaskFormOpen: false
  };

  private renderWorkspaceTasks = (): Array<JSX.Element> =>
    this.props.tasks.map((taskProps: TaskProps, key: number) => (
      <Task
        key={ key }
        onDetailsClick={ this.openTaskDetalis }
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

  private renderBoardIcon = (): JSX.Element => (
    <span className={ styles.titleIcon }>
      <Icon name={ this.props.icon || 'check' } />
    </span>
  )

  private onAddTask = (): void => {
    this.setState((prev: any) => ({
        ...prev,
        isAddTaskFormOpen: true
      }));
  }

  private onAddTaskSubmit = (): void => {}

  private openTaskDetalis = (task: TaskProps): void =>
    this.setState((prev: any) => ({
      ...prev,
      currentTaskDetails: task,
      isDetailsOpen: true
    }))

  private taskDetailsClose = (): void =>
  this.setState((prev: any) => ({
    ...prev,
    isDetailsOpen: false
  }))

  private onTitleInputLeave = (value: string): void => {
    const updateBoardBody = {
      slug: this.props.slug,
      data: {name: value}
    };
    this.props.updateBoardAction(updateBoardBody);
  }

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
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
        <div className={ styles.tasks }>
          { this.props.tasks.length
            ? this.renderWorkspaceTasks()
            : this.renderNoTasksInfo()
          }
          { this.renderAddTask() }
        </div>
        <TaskDetails
          isOpen={ this.state.isDetailsOpen }
          task={ this.state.isDetailsOpen && this.state.currentTaskDetails }
          onClose={ this.taskDetailsClose }
        />
        <AddTaskForm
          board={ this.props }
          isOpen={ this.state.isAddTaskFormOpen }
          onSubmit={ this.onAddTaskSubmit }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  updateBoardAction,
  addTaskAction
}, dispatch);

export const Board = connect<any, BoardDispatchProps, BoardProps>(null, mapDispatchToProps)(BoardComponent);
