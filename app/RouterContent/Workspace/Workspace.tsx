import * as React from 'react';
import { connect } from 'react-redux';

import { Board } from './Board/Board';
import { WorkspaceStateProps } from './WorkspaceProps';

const styles: any = require('./Workspace.scss');

export class WorkspaceComponent extends React.Component<WorkspaceStateProps> {

  private renderBoards = (): Array<JSX.Element> => this.props.project.boards.map((boardProps: any, key: number) => (
    <div key={ key } className={ styles.board }>
      <Board { ...boardProps } />
    </div>
  ))

  public render() {
    return (
      <div className={ styles.content} >
        { this.renderBoards() }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  project: state.data.project
});

export const Workspace = connect(mapStateToProps)(WorkspaceComponent);
