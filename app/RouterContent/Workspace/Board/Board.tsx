import * as React from 'react';
import { Icon } from 'react-fa';

import { BoardProps } from './BoardProps';
import { Task } from './Task/Task';
import { TaskProps } from './Task/TaskProps';

const styles: any = require('./Board.scss');

export class Board extends React.Component<BoardProps> {

  private renderWorkspaceTasks = (): Array<JSX.Element> =>
    this.props.tasks.map((taskProps: TaskProps, key: number) => (<Task key={ key } { ...taskProps } />))

  private renderBoardIcon = (): JSX.Element => (
    <span className={ styles.titleIcon }>
      <Icon name={ this.props.icon || 'check' } />
    </span>
  )

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
      </div>
    );
  }
}
