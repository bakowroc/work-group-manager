import { orderBy, startCase } from 'lodash';
import * as moment from 'moment';
import * as React from 'react';

import { LogTableProps } from './LogTableProps';

const styles: any = require('./LogTable.scss');

export class LogTable extends React.Component<LogTableProps> {

  private renderThead = (): Array<JSX.Element> =>
    this.props.data.keys.map((arrKey: any, key: number) => <th key={ key } >{ startCase(arrKey) }</th>)

  private renderTbody = (): Array<JSX.Element> =>
    orderBy(this.props.data.data, 'createdAt', 'desc')
      .slice(0, 5)
      .map((el: any) => (
        <tr>
          { this.props.data.keys.map((prop: any, key: number) => {
            let value = el[prop];

            if (prop === 'createdAt') {
            value = moment(el[prop]).fromNow();
            }

            return <td key={ key } >{ value }</td>;
          }) }
        </tr>
      ))

  public render(): JSX.Element {
    return (
      <table className={ styles.content }>
        <thead>
          <tr>
            { this.renderThead() }
          </tr>
        </thead>
        <tbody>
          { this.renderTbody() }
        </tbody>
      </table>
    );
  }
}
