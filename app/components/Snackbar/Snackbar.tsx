import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleSnackbar } from './snackbar.duck';
import { SnackbarDispatchProps, SnackbarStateProps } from './SnackbarProps';

const styles: any = require('./Snackbar.scss');

class SnackbarComponent extends React.Component<SnackbarStateProps & SnackbarDispatchProps> {

  private getSnackbarClassName = (): string =>
    `${styles.content} ${this.props.isOpen ?  styles.open : styles.close}`

  public render(): JSX.Element {
    if (this.props.isOpen) {
      setTimeout(this.props.toggleSnackbar, 3000);
    }

    return (
      <div className={ this.getSnackbarClassName() }>
      <div className={ styles.message }>
        { this.props.message }
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state: any): SnackbarStateProps => ({
  isOpen: state.snackbar.isOpen,
  message: state.snackbar.message
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  toggleSnackbar
}, dispatch);

export const Snackbar = connect<SnackbarStateProps, SnackbarDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(SnackbarComponent);
