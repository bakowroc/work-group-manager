import * as React from 'react';
import { Icon } from 'react-fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../components/Button';
import { Menu } from '../components/Menu';
import { MenuItem } from '../components/Menu/MenuItem';
import { toggleNotification } from '../Notification/notification.duck';
import { NavigationDispatchProps, } from './NavigationProps';

const styles: any = require('./Navigation.scss');

class NavigationComponent extends React.Component<NavigationDispatchProps> {

  private renderNotafictionButton = (): JSX.Element => (
    <Button
      label={ <Icon name="bell" /> }
      onClick={ this.props.toggleNotification }
      flat={ true }
    />
  )

  public render(): JSX.Element {
    return(
      <div className={ styles.content }>
        <Menu menuClassName={ styles.menu }>
          <MenuItem
            label="Work group manager"
            labelClassName={ styles.projectNameLabel }
          />
          <MenuItem
            label={ this.renderNotafictionButton() }
            labelClassName={ styles.iconButton }
          />
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any): NavigationDispatchProps => bindActionCreators({
  toggleNotification
}, dispatch);

export const Navigation = connect<any, NavigationDispatchProps, any>(
  null,
  mapDispatchToProps,
)(NavigationComponent);
