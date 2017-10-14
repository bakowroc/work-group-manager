import * as React from 'react';

import { Board } from './Board/Board';
import { BoardProps } from './Board/BoardProps';
import { BOARDS_DATA } from './BoardsData';

const styles: any = require('./Workspace.scss');

export class Workspace extends React.Component<{}> {

  private renderBoards = (): Array<JSX.Element> => BOARDS_DATA.map((boardProps: BoardProps, key: number) => (
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
