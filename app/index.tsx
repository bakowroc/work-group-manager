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
/*tslint:disable*/
import { fetchBoards, fetchBoardsAction } from './utils/axios/requests/BoardActions';
import { fetchProject, fetchProjectAction } from './utils/axios/requests/ProjectActions';
import { fetchTasks, fetchTasksAction } from './utils/axios/requests/TaskActions';
import { fetchMe, fetchMeUserAction } from './utils/axios/requests/UserActions';
import { fetchUsers, fetchUsersAction } from './utils/axios/requests/UsersActions';
/*tslint:enable*/
const store = configure();

store.dispatch(fetchMeUserAction());
store.dispatch(fetchUsersAction());
store.dispatch(fetchProjectAction());
store.dispatch(fetchBoardsAction());
store.dispatch(fetchTasksAction());

sagaMiddleware.run(watchFetchMe);
sagaMiddleware.run(watchFetchUsers);
sagaMiddleware.run(watchFetchProject);
sagaMiddleware.run(watchFetchBoards);
sagaMiddleware.run(watchFetchTasks);
sagaMiddleware.run(watchUpdateBoard);

/*
sagaMiddleware.run(fetchMe);
sagaMiddleware.run(fetchUsers);
sagaMiddleware.run(fetchProject);
sagaMiddleware.run(fetchBoards);
sagaMiddleware.run(fetchTasks);
*/
ReactDOM.render(
    <Provider store={ store }>
      <AppContainer />
     </Provider>,
    document.getElementById('root')
);
