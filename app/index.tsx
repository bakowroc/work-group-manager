import 'normalize.css';
import './global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './AppContainer';
import { sagaMiddleware } from './middleware/saga';
import configure from './store';
import {
    watchAddTask,
    watchAuthenticate,
    watchDeleteTask,
    watchFetchBoards,
    watchFetchChats,
    watchFetchMe,
    watchFetchProject,
    watchFetchTasks ,
    watchFetchUsers,
    watchReceiveDataFetching,
    watchUpdateBoard,
    watchUpdateTask,
} from './utils/axios/axios.duck';
import { isLogged } from './utils/axios/parsers/query';
import { fetchProjectAction } from './utils/axios/requests/ProjectActions';
import { fetchMeUserAction } from './utils/axios/requests/UserActions';
import { fetchUsersAction } from './utils/axios/requests/UsersActions';
import { watchJoinChat, watchNewChatMessage } from './utils/socket/socket.duck';

const store = configure();

sagaMiddleware.run(watchFetchMe);
sagaMiddleware.run(watchFetchUsers);
sagaMiddleware.run(watchFetchProject);
sagaMiddleware.run(watchFetchBoards);
sagaMiddleware.run(watchUpdateBoard);
sagaMiddleware.run(watchFetchChats);
sagaMiddleware.run(watchFetchTasks);
sagaMiddleware.run(watchAddTask);
sagaMiddleware.run(watchUpdateTask);
sagaMiddleware.run(watchDeleteTask);
sagaMiddleware.run(watchReceiveDataFetching);
sagaMiddleware.run(watchAuthenticate);
sagaMiddleware.run(watchNewChatMessage);
sagaMiddleware.run(watchJoinChat);

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
