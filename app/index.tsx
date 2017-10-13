import { createBrowserHistory  } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {  Route, Router } from 'react-router';

import { AppContainer } from './AppContainer';

const history = createBrowserHistory();
const Routes: JSX.Element = (
  <Route path={ '/' } component={ Main } />
);

ReactDOM.render(
    <Provider>
      <AppContainer />
      <Router history={ history }>
        { Routes }
      </Router>
     </Provider>,
    document.getElementById('root')
);
