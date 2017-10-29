import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../Button';
import { toggleConfirm } from './confirm.duck';
import { ConfirmDispatchProps, ConfirmProps, ConfirmStateProps } from './ConfirmProps';

const styles: any = require('./Confirm.scss');

class ConfirmComponent extends React.Component<ConfirmProps & ConfirmStateProps & ConfirmDispatchProps> {

  private onConfirm = (): void => {
    this.props.onConfirm();
    this.props.toggleConfirm();
  }

  private renderMessage = (): JSX.Element => (
    <div className={ styles.message }>
      { this.props.message }
    </div>
  )

  private renderActionButtons = (): JSX.Element => (
    <div className={ styles.actionButtons }>
      <Button
        label="Confirm"
        onClick={ this.onConfirm }
        flat={ false }
      />
      <Button
        label="Discard"
        onClick={ this.props.toggleConfirm }
        flat={ false }
      />
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ `${styles.content} ${this.props.isOpen ? styles.open : ''}` }>
        <div className={ styles.label }>
          { this.props.label }
        </div>
        { this.props.message && this.renderMessage() }
        { this.renderActionButtons() }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isOpen: state.confirm.isOpen
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  toggleConfirm
}, dispatch);

export const Confirm = connect<ConfirmStateProps, ConfirmDispatchProps, ConfirmProps>(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmComponent);
