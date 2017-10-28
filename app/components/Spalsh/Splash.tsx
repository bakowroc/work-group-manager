import * as React from 'react';
import { connect } from 'react-redux';

import { SplashStateProps } from './SplashProps';

const styles: any = require('./Splash.scss');

class SplashComponent extends React.Component<SplashStateProps> {
  public render(): JSX.Element {
    return(
      <div className={ `${styles.content} ${!this.props.isDataFetching ? styles.show : ''}` }>
        Loading data...
      </div>
    );
  }
}

const mapStateToProps = (state: any): SplashStateProps => ({
  isDataFetching: state.data.isDataFetching
});

export const Splash = connect<SplashStateProps, any, any>(mapStateToProps)(SplashComponent);
