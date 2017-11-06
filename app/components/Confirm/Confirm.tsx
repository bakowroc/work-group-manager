import { isUndefined } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../Button';
import { toggleConfirm } from './confirm.duck';
import { ConfirmDispatchProps, ConfirmStateProps } from './ConfirmProps';

const styles: any = require('./Confirm.scss');

class ConfirmComponent extends React.Component<ConfirmStateProps & ConfirmDispatchProps> {

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
        buttonClassName={ styles.button }
        onClick={ this.onConfirm }
        flat={ true }
      />
      <Button
        label="Discard"
        buttonClassName={ styles.button }
        onClick={ this.props.toggleConfirm }
        flat={ true }
      />
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ `${styles.layer} ${this.props.isOpen ? styles.open : ''}` }>
        <div className={ styles.content }>
          <div className={ styles.label }>
            { this.props.label }
          </div>
          { !isUndefined(this.props.message) && this.renderMessage() }
          { this.renderActionButtons() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): ConfirmStateProps => ({
  isOpen: state.confirm.isOpen,
  message: state.confirm.message,
  label: state.confirm.label,
  onConfirm: state.confirm.onConfirm
});

const mapDispatchToProps = (dispatch: any): ConfirmDispatchProps => bindActionCreators({
  toggleConfirm
}, dispatch);

export const Confirm = connect<ConfirmStateProps, ConfirmDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmComponent);
