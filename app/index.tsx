import 'normalize.css';
import './global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './AppContainer';
import { sagaMiddleware } from './middleware/saga';
import configure from './store';
import {
    watchFetchBoards,
    watchFetchMe,
    watchFetchProject,
    watchFetchTasks ,
    watchFetchUsers,
    watchUpdateBoard
} from './utils/axios/axios.duck';

import { fetchBoardsAction } from './utils/axios/requests/BoardActions';
import { fetchProjectAction } from './utils/axios/requests/ProjectActions';
import { fetchTasksAction } from './utils/axios/requests/TaskActions';
import { fetchMeUserAction } from './utils/axios/requests/UserActions';
import { fetchUsersAction } from './utils/axios/requests/UsersActions';

const store = configure();

sagaMiddleware.run(watchFetchMe);
sagaMiddleware.run(watchFetchUsers);
sagaMiddleware.run(watchFetchProject);
sagaMiddleware.run(watchFetchBoards);
sagaMiddleware.run(watchFetchTasks);
sagaMiddleware.run(watchUpdateBoard);

store.dispatch(fetchMeUserAction());
store.dispatch(fetchUsersAction());
store.dispatch(fetchProjectAction());
store.dispatch(fetchBoardsAction());
store.dispatch(fetchTasksAction());

ReactDOM.render(
    <Provider store={ store }>
      <AppContainer />
     </Provider>,
    document.getElementById('root')
);
