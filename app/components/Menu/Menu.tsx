import * as React from 'react';

import { MenuProps } from './MenuProps';

const styles: any = require('./Menu.scss');

export class Menu extends React.Component<MenuProps> {

  private getMenuClassName = (): string => {
    const ulStyle = this.props.vertical ? styles.menuVertical : styles.menuHorizontal;

    return `${ulStyle} ${this.props.listClassName}`;
  }
  public render(): JSX.Element {
    return (
      <div className={ `${styles.content} ${this.props.menuClassName}` }>
        <ul className={ this.getMenuClassName() }>
          { this.props.children }
        </ul>
      </div>
    );
  }
}
