import * as React from 'react';
import { connect } from 'react-redux';

import { isDataFetching } from '../../data/selectors/dataSelectors';
import { SplashStateProps } from './SplashProps';

const styles: any = require('./Splash.scss');

class SplashComponent extends React.Component<SplashStateProps> {
  public render(): JSX.Element {
    return (
      <div>
        <div className={ `${styles.content} ${this.props.isDataFetching ? styles.show : ''}` }>
          <div className={ styles.loadingSpinner }>
            <svg className={ styles.spinner } width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
              <circle className={ styles.path } fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"/>
            </svg>
          </div>
        </div>
        { !this.props.isDataFetching && this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state: any): SplashStateProps => ({
  isDataFetching: isDataFetching(state)
});

export const Splash = connect<SplashStateProps, any, any>(mapStateToProps)(SplashComponent);
