import { Action, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

import { FETCH_BOARDS, fetchBoards, GET_BOARDS, UPDATE_BOARD, updateBoard } from './requests/BoardActions';
import { FETCH_ERROR } from './requests/ErrorActions';
import { DEFAULT_PROJECT_STATE, FETCH_PROJECT, fetchProject, GET_PROJECT } from './requests/ProjectActions';
import { FETCH_TASKS, fetchTasks, GET_TASKS } from './requests/TaskActions';
import { FETCH_ME_USER, fetchMe, GET_ME_USER } from './requests/UserActions';
import { FETCH_USERS, fetchUsers, GET_USERS } from './requests/UsersActions';

const initialState = {
  error: '',
  me: {},
  users: [
    {}
  ],
  project: DEFAULT_PROJECT_STATE,
  boards: [
    {}
  ],
  tasks: [
    {}
  ]
};

export default handleActions({
  [GET_ME_USER]: (state: any, action: Action<any>) => ({...state, me: action.payload}),
  [GET_USERS]: (state: any, action: Action<any>) => ({...state, users: action.payload}),
  [GET_PROJECT]: (state: any, action: Action<any>) => ({...state, project: action.payload}),
  [GET_BOARDS]: (state: any, action: Action<any>) => ({...state, boards: action.payload}),
  [GET_TASKS]: (state: any, action: Action<any>) => ({...state, tasks: action.payload}),
  [FETCH_ERROR]: (state: any, action: Action<any>) => ({...state, error: action.payload})
}, initialState);

export function* watchFetchMe() {
  yield takeLatest(FETCH_ME_USER, fetchMe);
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

export function* watchFetchProject() {
  yield takeLatest(FETCH_PROJECT, fetchProject);
}

export function* watchFetchBoards() {
  yield takeLatest(FETCH_BOARDS, fetchBoards);
}

export function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD, updateBoard);
}

export function* watchFetchTasks() {
  yield takeLatest(FETCH_TASKS, fetchTasks);
}
