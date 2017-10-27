import * as React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import { Snackbar } from './components/Snackbar';
import { Navigation } from './Navigation/Navigation';
import { Notification } from './Notification/Notification';
import { Main } from './RouterContent/Main/Main';
import { MainChat } from './RouterContent/MainChat/MainChat';
import { Workspace } from './RouterContent/Workspace/Workspace';
import { Sidebar } from './Sidebar/Sidebar';

const styles: any = require('./AppContainer.scss');

export class AppContainer extends React.Component<{}> {

  private renderRouteContainer = (): JSX.Element => (
    <div className={ styles.container }>
      <Route exact={ true } path="/" component={ Main } />
      <Route path="/workspace" component={ Workspace } />
      <Route path="/chat" component={ MainChat } />
    </div>
  )

  public render() {
    return (
      <Router>
        <div className={ styles.content }>
          <Snackbar />
          <Notification />
          <Sidebar />
          <Navigation />
          { this.renderRouteContainer() }
        </div>
      </Router>
    );
  }
}
