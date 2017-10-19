import * as React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../components/Button';
import { Drawer } from '../components/Drawer';
import { toggleNotification } from './notification.duck';
import { NotificationDispatchProps, NotificationStateProps } from './NotificationProps';

const styles: any = require('./Notification.scss');

class NotificationComponent extends React.Component<NotificationStateProps & NotificationDispatchProps> {

  private renderCloseButton = (): JSX.Element => (
    <Button
      label={ <Icon name="times" /> }
      buttonClassName={ styles.closeButton }
      onClick={ this.props.toggleNotification }
      flat={ true }
    />
  )

  private renderNotafictionBody = () => (
    <div>
      { this.renderCloseButton() }
    </div>
  )

  public render(): JSX.Element {
    return (
      <Drawer
        isOpen={ this.props.isOpen }
        body={ this.renderNotafictionBody() }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  isOpen: state.notification.isOpen
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  toggleNotification
}, dispatch);

export const Notification = connect<NotificationStateProps, NotificationDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(NotificationComponent);
