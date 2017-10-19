import { head } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';

import { ProfileStateProps } from './ProfileProps';

const styles: any = require('./Profile.scss');

export class ProfileComponent extends React.Component<ProfileStateProps> {

  private renderUserAvatar = (): JSX.Element => (
    <div className={ styles.userAvatar }>
      { head(this.props.me.username) }
    </div>
  )

  private renderUserName = (): JSX.Element => (
    <div className={ styles.userName }>
      { this.props.me.email }
    </div>
  )

  private renderUserMenu = (): JSX.Element => <div />;

  private renderBackgroundImage = (): JSX.Element => <div className={ styles.image } />;

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        { this.renderUserAvatar() }
        { this.renderUserName() }
        { this.renderUserMenu() }
        { this.renderBackgroundImage() }
      </div>
    );
  }
}

const mapStateToProps = (state: any): ProfileStateProps => ({
  me: state.data.me
});

export const Profile = connect<ProfileStateProps, {}, {}>(
  mapStateToProps
)(ProfileComponent);
