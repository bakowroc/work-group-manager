import * as React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { InputEdit } from '../../../components/InputEdit';
import { updateBoardAction } from '../../../utils/axios/requests/BoardActions';
import { BoardDispatchProps, BoardProps } from './BoardProps';
import { Task } from './Task/Task';
import { TaskProps } from './Task/TaskProps';
import { TaskDetails } from './TaskDetails/TaskDetails';

const styles: any = require('./Board.scss');

export class BoardComponent extends React.Component<BoardProps & BoardDispatchProps> {

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

  private onTitleInputLeave = (value: string): void => {
   this.props.updateBoardAction({slug: this.props.slug, data: {name: value}});
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

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  updateBoardAction
}, dispatch);

export const Board = connect<any, BoardDispatchProps, BoardProps>(null, mapDispatchToProps)(BoardComponent);
