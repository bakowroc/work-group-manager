import 'normalize.css';
import './global.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from './AppContainer';
import { sagaMiddleware } from './middleware/saga';
import configure from './store';
import { isLogged } from './utils/axios/parsers/query';
import { watchAuthenticate } from './utils/axios/requests/AuthActions';
import { watchFetchBoards, watchUpdateBoard } from './utils/axios/requests/BoardActions';
import { watchFetchChats } from './utils/axios/requests/ChatActions';
import { fetchMyProjectAction, fetchProjectsAction, watchFetchMyProject, watchFetchProject } from './utils/axios/requests/ProjectActions';
import { watchAddTask, watchDeleteTask, watchFetchTasks, watchUpdateTask,  } from './utils/axios/requests/TaskActions';
import { fetchMeUserAction, fetchUsersAction, watchFetchMe, watchFetchUsers} from './utils/axios/requests/UsersActions';
import { watchJoinChat, watchNewChatMessage } from './utils/socket/socket.duck';

const store = configure();

sagaMiddleware.run(watchFetchMe);
sagaMiddleware.run(watchFetchUsers);
sagaMiddleware.run(watchFetchProject);
sagaMiddleware.run(watchFetchMyProject);
sagaMiddleware.run(watchFetchBoards);
sagaMiddleware.run(watchUpdateBoard);
sagaMiddleware.run(watchFetchChats);
sagaMiddleware.run(watchFetchTasks);
sagaMiddleware.run(watchAddTask);
sagaMiddleware.run(watchUpdateTask);
sagaMiddleware.run(watchDeleteTask);
sagaMiddleware.run(watchAuthenticate);
sagaMiddleware.run(watchNewChatMessage);
sagaMiddleware.run(watchJoinChat);

store.dispatch(fetchUsersAction());
store.dispatch(fetchProjectsAction());

if (isLogged()) {
    store.dispatch(fetchMeUserAction());
    store.dispatch(fetchMyProjectAction());
}

ReactDOM.render(
    <Provider store={ store } >
      <AppContainer />
     </Provider>,
    document.getElementById('root')
);
