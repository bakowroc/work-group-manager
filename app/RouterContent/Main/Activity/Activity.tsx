import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../../../components/Button';
import { ActivityProps } from './ActivityProps';

const styles: any = require('./Activity.scss');

export class Activity extends React.Component<ActivityProps> {

  private getContentWidth = (): string => {
    const width: any = {
      ['1col']: styles.oneCol,
      ['2col']: styles.twoCol,
      ['3col']: styles.threeCol
    };

    return width[this.props.width] || width['1col'];
  }

  public render(): JSX.Element {
    return (
      <div className={ `${styles.content} ${this.props.contentClassName} ${this.getContentWidth()}` }>
        { this.props.content}
        <NavLink
          to={ this.props.linkTo }
          className={ styles.navlink }
        >
        <Button
          label={ this.props.linkToLabel || 'More' }
          flat={ false }
        />
        </NavLink>
      </div>
    );
  }
}
