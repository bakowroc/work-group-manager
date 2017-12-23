import { get, groupBy, orderBy } from 'lodash';
import * as moment from 'moment';
import * as React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FloatingButton } from '../../components/FloatingButton/FloatingButton';
import { AddBoardForm } from './AddBoardForm/AddBoardForm';
import { toggleAddBoardForm } from './AddBoardForm/addBoardForm.duck';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { toggleAddTaskForm } from './AddTaskForm/addTaskForm.duck';
import { Board } from './Board/Board';
import { TaskDetails } from './TaskDetails/TaskDetails';
import { toggleTaskDetails } from './TaskDetails/taskDetails.duck';
import { WorkspaceDispatchProps, WorkspaceStateProps } from './WorkspaceProps';

const styles: any = require('./Workspace.scss');

export class WorkspaceComponent extends React.Component<WorkspaceStateProps & WorkspaceDispatchProps> {

  private renderBoards = (): Array<JSX.Element> =>
    this.props.boards
    .sort((a: any, b: any) => moment(b.createdAt).isAfter(a.createdAt) ? a : b)
    .map((boardProps: any, key: number) => (
      <div key={ key } className={ styles.board }>
        <Board
          { ...boardProps }
          tasks={ orderBy(get(this.props.tasks, boardProps._id, []), 'order') }
        />
      </div>
    ))

  private renderAddTaskForm = (): JSX.Element => (
    <AddTaskForm
      board={ this.props.addTaskAssignedBoard }
      isOpen={ this.props.isAddTaskFormOpen }
      onSubmit={ this.props.toggleAddTaskForm}
    />
  )

  private renderAddBoardForm = (): JSX.Element => (
    <AddBoardForm
      isOpen={ this.props.isAddBoardFormOpen }
      onSubmit={ this.props.toggleAddBoardForm}
    />
  )

  private renderTaskDetails = (): JSX.Element => (
    <TaskDetails
      isOpen={ this.props.isTaskDetailsOpen }
      task={ this.props.currentTaskDetails }
      onClose={ this.props.toggleTaskDetails }
    />
  )

  private renderAddBoardButton = (): JSX.Element => (
    <FloatingButton
      label={ <Icon name="plus" /> }
      onClick={ this.props.toggleAddBoardForm }
      flat={ false }
    />
  )

  public render() {
    return (
      <div>
        <div className={ styles.content} >
          { this.renderBoards() }
        </div>
        { this.renderTaskDetails() }
        { this.renderAddBoardForm() }
        { this.renderAddTaskForm() }
        { this.renderAddBoardButton() }
      </div>
    );
  }
}

const mapStateToProps = (state: any): WorkspaceStateProps => ({
  project: state.projects.self,
  boards: orderBy(state.boards.data, ['order', 'createdAt', 'name']),
  tasks: groupBy(state.tasks.data, 'board._id'),
  isAddTaskFormOpen: state.addTaskForm.isOpen,
  isAddBoardFormOpen: state.addBoardForm.isOpen,
  addTaskAssignedBoard: state.addTaskForm.board,
  isTaskDetailsOpen: state.taskDetails.isOpen,
  currentTaskDetails: state.taskDetails.currentTask
});

const mapDispatchToProps = (dispatch: any): WorkspaceDispatchProps => bindActionCreators({
  toggleAddTaskForm,
  toggleAddBoardForm,
  toggleTaskDetails
}, dispatch);

export const Workspace = connect<WorkspaceStateProps, WorkspaceDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceComponent);
