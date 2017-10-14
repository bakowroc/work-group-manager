import 'normalize.css';
import './global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './AppContainer';
import sagaMiddleware from './middleware/saga';
import configure from './store';
import { fetchMeUser, watchFetchMeUser } from './utils/axios.duck';

const store = configure();

store.dispatch(fetchMeUser());

sagaMiddleware.run(watchFetchMeUser);

ReactDOM.render(
    <Provider store={ store }>
      <AppContainer />
     </Provider>,
    document.getElementById('root')
);
