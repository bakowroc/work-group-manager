import { head } from 'lodash';
import * as React from 'react';

import { ProfileProps } from './ProfileProps';

const styles: any = require('./Profile.scss');

export class Profile extends React.Component<ProfileProps> {

  private renderUserAvatar = (): JSX.Element => (
    <div className={ styles.userAvatar }>
      { head(this.props.username) }
    </div>
  )

  private renderUserName = (): JSX.Element => (
    <div className={ styles.userName }>
      { this.props.username }
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
