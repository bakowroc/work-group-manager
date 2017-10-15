import * as React from 'react';
import { Icon } from 'react-fa';

import { BoardProps } from './BoardProps';
import { Task } from './Task/Task';
import { TaskProps } from './Task/TaskProps';
import { TaskDetails } from './TaskDetails/TaskDetails';

const styles: any = require('./Board.scss');

export class Board extends React.Component<BoardProps> {

  public state = {
    currentTaskDetails: this.props.tasks[1],
    isDetailsOpen: false
  };

  private renderWorkspaceTasks = (): Array<JSX.Element> =>
    this.props.tasks.map((taskProps: TaskProps, key: number) => (
      <Task
        key={ key }
        onDetailsClick={ this.openTaskDetalis }
        { ...taskProps }
      />
    ))

  private renderBoardIcon = (): JSX.Element => (
    <span className={ styles.titleIcon }>
      <Icon name={ this.props.icon || 'check' } />
    </span>
  )

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

  public render(): JSX.Element {
    return (
      <div className={ styles.content  + ' ' + styles[this.props.boardColor] }>
        <div className={ styles.title }>
          { this.renderBoardIcon() }
          { this.props.title }
        </div>
        <div className={ styles.tasks }>
          { this.renderWorkspaceTasks() }
        </div>
        <TaskDetails
          isOpen={ this.state.isDetailsOpen }
          task={ this.state.isDetailsOpen && this.state.currentTaskDetails }
          onClose={ this.taskDetailsClose }
        />
      </div>
    );
  }
}
