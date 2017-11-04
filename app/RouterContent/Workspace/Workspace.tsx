import { get, groupBy, isEmpty, orderBy } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { toggleAddTaskForm } from './AddTaskForm/addTaskForm.duck';
import { Board } from './Board/Board';
import { TaskDetails } from './TaskDetails/TaskDetails';
import { toggleTaskDetails } from './TaskDetails/taskDetails.duck';
import { WorkspaceDispatchProps, WorkspaceStateProps } from './WorkspaceProps';

const styles: any = require('./Workspace.scss');

export class WorkspaceComponent extends React.Component<WorkspaceStateProps & WorkspaceDispatchProps> {

  private renderBoards = (): Array<JSX.Element> => this.props.boards.map((boardProps: any, key: number) => (
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

  private renderTaskDetails = (): JSX.Element => (
    <TaskDetails
      isOpen={ this.props.isTaskDetailsOpen }
      task={ this.props.currentTaskDetails }
      onClose={ this.props.toggleTaskDetails }
    />
  )

  public render() {
    return (
      <div>
        <div className={ styles.content} >
          { !isEmpty(this.props.boards) && this.renderBoards() }
        </div>
        { this.renderTaskDetails() }
        { this.renderAddTaskForm() }
      </div>
    );
  }
}

const mapStateToProps = (state: any): WorkspaceStateProps => ({
  project: state.data.project,
  boards: orderBy(state.data.boards, ['order', 'createdAt', 'name']),
  tasks: groupBy(state.data.tasks, 'board._id'),
  isAddTaskFormOpen: state.addTaskForm.isOpen,
  addTaskAssignedBoard: state.addTaskForm.board,
  isTaskDetailsOpen: state.taskDetails.isOpen,
  currentTaskDetails: state.taskDetails.currentTask,
  isDataFetching: state.data.isDataFetching
});

const mapDispatchToProps = (dispatch: any): WorkspaceDispatchProps => bindActionCreators({
  toggleAddTaskForm,
  toggleTaskDetails
}, dispatch);

export const Workspace = connect<WorkspaceStateProps, WorkspaceDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceComponent);
