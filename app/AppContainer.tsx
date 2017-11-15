import * as React from 'react';
import { Route, Router } from 'react-router-dom';

import { Confirm } from './components/Confirm';
import { Snackbar } from './components/Snackbar';
import { Splash } from './components/Splash';
import { Login } from './Login/Login';
import history from './middleware/history';
import { Navigation } from './Navigation/Navigation';
import { Notification } from './Notification/Notification';
import { Register } from './Register/Register';
import { Main } from './RouterContent/Main/Main';
import { MainChat } from './RouterContent/MainChat/MainChat';
import { User } from './RouterContent/User/User';
import { Workspace } from './RouterContent/Workspace/Workspace';
import { Sidebar } from './Sidebar/Sidebar';
import { isLogged } from './utils/axios/parsers/query';

const styles: any = require('./AppContainer.scss');

export class AppContainer extends React.Component<{}> {

  private renderRouteContainer = (): JSX.Element => (
    <div className={ styles.container }>
      <Route exact={ true } path="/" component={ Main } />
      <Route path="/workspace" component={ Workspace } />
      <Route path="/chat" component={ MainChat } />
      <Route exact={ true } path="/user" component={ User } />
    </div>
  )

  private renderAuthContent = (): JSX.Element => (
    <div className={ styles.content }>
      <Confirm />
      <Snackbar />
      <Notification />
      <Sidebar />
      <Navigation />
      { this.renderRouteContainer() }
    </div>
  )

  private renderNoAuthContent = (): JSX.Element => (
    <div>
      <Route exact={ true } path="/" component={ Login } />
      <Route exact={ true } path="/register" component={ Register } />
    </div>
  )

  public render() {
    return (
      <Splash>
        <Router history={ history } >
          { isLogged()
            ? this.renderAuthContent()
            : this.renderNoAuthContent() }
        </Router>
      </Splash>
    );
  }
}
