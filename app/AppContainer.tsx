import * as React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import { Navigation } from './Navigation/Navigation';
import { Main } from './RouterContent/Main/Main';
import { Workspace } from './RouterContent/Workspace/Workspace';
import { Sidebar } from './Sidebar/Sidebar';

const styles: any = require('./AppContainer.scss');

export class AppContainer extends React.Component<{}> {
  public render() {
    return (
      <Router>
        <div className={ styles.content }>
          <Navigation />
          <Sidebar />
          <div className={ styles.container }>
            <Route exact={ true } path="/" component={ Main } />
            <Route path="/workspace" component={ Workspace } />
          </div>
        </div>
      </Router>
    );
  }
}
