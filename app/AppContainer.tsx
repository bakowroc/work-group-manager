import * as React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import { Confirm } from './components/Confirm';
import { Snackbar } from './components/Snackbar';
import { Splash } from './components/Spalsh';
import { Login } from './Login/Login';
import { Navigation } from './Navigation/Navigation';
import { Notification } from './Notification/Notification';
import { Main } from './RouterContent/Main/Main';
import { MainChat } from './RouterContent/MainChat/MainChat';
import { Workspace } from './RouterContent/Workspace/Workspace';
import { Sidebar } from './Sidebar/Sidebar';
import { isLogged } from './utils/axios/parsers/query';

const styles: any = require('./AppContainer.scss');

export class AppContainer extends React.Component<{}> {

  private renderRouteContainer = (): JSX.Element => (
    <div className={ styles.container }>
      <Route exact={ true } path="/" component={ Main } />
      <Route path="/workspace" component={ Workspace } />
      <Route path="/chat/:task_id?" component={ MainChat } />
    </div>
  )

  private renderAuthContent = (): JSX.Element => (
    <div className={ styles.content }>
      <Confirm />
      <Splash />
      <Snackbar />
      <Notification />
      <Sidebar />
      <Navigation />
      { this.renderRouteContainer() }
    </div>
  )

  private renderNoAuthContent = (): JSX.Element => (
    <div>
      <Route exact={ false } path="/" component={ Login } />
    </div>
  )

  public render() {
    return (
      <Router>
        { isLogged()
          ? this.renderAuthContent()
          : this.renderNoAuthContent() }
      </Router>
    );
  }
}
