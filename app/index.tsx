import 'normalize.css';
import './global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './AppContainer';
import { sagaMiddleware } from './middleware/saga';
import configure from './store';
import {
    fetchMe,
    fetchUsers,
} from './utils/axios/axios.duck';
import { fetchMeUserAction } from './utils/axios/requests/UserActions';
import { fetchUsersAction } from './utils/axios/requests/UsersActions';

const store = configure();

store.dispatch(fetchMeUserAction());
store.dispatch(fetchUsersAction());

sagaMiddleware.run(fetchMe);
sagaMiddleware.run(fetchUsers);

ReactDOM.render(
    <Provider store={ store }>
      <AppContainer />
     </Provider>,
    document.getElementById('root')
);
