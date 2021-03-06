import { isEmpty, truncate } from 'lodash';
import * as React from 'react';

import { TaskPrior } from './TaskPrior';
import { TaskProps } from './TaskProps';

const styles: any = require('./Task.scss');

export class Task extends React.Component<TaskProps> {

  private getTaskClassName = (): string => {
    const prior = this.props.prior ? this.props.prior : TaskPrior.NONE;
    const priorClass = {
      [TaskPrior.HIGHEST]: styles.prior3,
      [TaskPrior.HIGH]: styles.prior2,
      [TaskPrior.NORMAL]: styles.prior1,
      [TaskPrior.NONE]: styles.prior0
    };

    const isDone = this.props.isDone ? styles.done : '';

    return `${styles.content} ${priorClass[prior]} ${isDone}`;
  }

  private onTaskClick = (): void => this.props.onDetailsClick(this.props);

  private renderCategory = (): JSX.Element => (
    <div className={ styles.category }>
      { this.props.category }
    </div>
  )

  public render(): JSX.Element {
    return(
      <div
        className={ this.getTaskClassName() }
        id={ this.props.slug }
        onClick={ this.onTaskClick }
      >
        <div className={ styles.title }>
          { this.props.name }
        </div>
        <div className={ styles.paragraph }>
          { truncate(this.props.description, {length: 130}) }
        </div>
        { !isEmpty(this.props.category) && this.renderCategory() }
      </div>
    );
  }
}
