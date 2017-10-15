import * as React from 'react';

import { TaskProps } from './TaskProps';

const styles: any = require('./Task.scss');

export class Task extends React.Component<TaskProps> {

  private renderCategory = (): JSX.Element => (
    <div className={ styles.category }>
      { this.props.category }
    </div>
  )

  private onTaskClick = (): void => this.props.onDetailsClick(this.props);

  public render(): JSX.Element {
    return(
      <div onClick={ this.onTaskClick } >
        <div className={ styles.content }>
          <div className={ styles.title }>
            { this.props.title }
          </div>
          <div className={ styles.paragraph }>
            { this.props.desc }
          </div>
          { this.props.category && this.renderCategory() }
        </div>
      </div>
    );
  }
}
