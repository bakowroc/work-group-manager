import 'normalize.css';
import './global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './AppContainer';
import { sagaMiddleware } from './middleware/saga';
import { socketMiddleware } from './middleware/socket';
import configure from './store';
import {
    watchAddTask,
    watchAuthenticate,
    watchDeleteTask,
    watchFetchBoards,
    watchFetchMe,
    watchFetchProject,
    watchFetchTasks ,
    watchFetchUsers,
    watchReceiveDataFetching,
    watchUpdateBoard,
    watchUpdateTask
} from './utils/axios/axios.duck';
import { isLogged } from './utils/axios/parsers/query';
import { fetchProjectAction } from './utils/axios/requests/ProjectActions';
import { fetchMeUserAction } from './utils/axios/requests/UserActions';
import { fetchUsersAction } from './utils/axios/requests/UsersActions';

const store = configure();

sagaMiddleware.run(watchFetchMe);
sagaMiddleware.run(watchFetchUsers);
sagaMiddleware.run(watchFetchProject);
sagaMiddleware.run(watchFetchBoards);
sagaMiddleware.run(watchUpdateBoard);
sagaMiddleware.run(watchFetchTasks);
sagaMiddleware.run(watchAddTask);
sagaMiddleware.run(watchUpdateTask);
sagaMiddleware.run(watchDeleteTask);
sagaMiddleware.run(watchReceiveDataFetching);
sagaMiddleware.run(watchAuthenticate);

socketMiddleware.on('output', (data: any) => alert(data));

if (isLogged()) {
    store.dispatch(fetchMeUserAction());
    store.dispatch(fetchUsersAction());
    store.dispatch(fetchProjectAction());
}

ReactDOM.render(
    <Provider store={ store } >
      <AppContainer />
     </Provider>,
    document.getElementById('root')
);
