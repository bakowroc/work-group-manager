import { Action, handleActions, createAction } from 'redux-actions';
import { takeLatest, put, takeEvery } from 'redux-saga/effects';

import { FETCH_BOARDS, fetchBoards, GET_BOARDS, UPDATE_BOARD, updateBoard } from './requests/BoardActions';
import { FETCH_ERROR, fetchError } from './requests/ErrorActions';
import { DEFAULT_PROJECT_STATE, FETCH_PROJECT, fetchProject, GET_PROJECT } from './requests/ProjectActions';
import { ADD_TASK, addTask, FETCH_TASKS, fetchTasks, GET_TASKS } from './requests/TaskActions';
import { FETCH_ME_USER, fetchMe, GET_ME_USER } from './requests/UserActions';
import { FETCH_USERS, fetchUsers, GET_USERS } from './requests/UsersActions';

const RECEIVE_DATA_FETCHED = 'RECEIVE_DATA_FETCHED';
const receiveDataFetched = createAction(RECEIVE_DATA_FETCHED);

const SET_DATA_WAS_FETCHED = 'SET_DATA_WAS_FETCHED';
const setDataWasFetched = createAction(SET_DATA_WAS_FETCHED);

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
  ],
  isDataFetching: true
};

export default handleActions({
  [GET_ME_USER]: (state: any, action: Action<any>) => ({...state, me: action.payload}),
  [GET_USERS]: (state: any, action: Action<any>) => ({...state, users: action.payload}),
  [GET_PROJECT]: (state: any, action: Action<any>) => ({...state, project: action.payload}),
  [GET_BOARDS]: (state: any, action: Action<any>) => ({...state, boards: action.payload}),
  [GET_TASKS]: (state: any, action: Action<any>) => ({...state, tasks: action.payload}),
  [FETCH_ERROR]: (state: any, action: Action<any>) => ({...state, error: action.payload}),
  [SET_DATA_WAS_FETCHED]: (state: any) => ({...state, isDataFetching: false})
}, initialState);

function* dataIsBeingFetched() {
  try {
    yield put(receiveDataFetched());
  } catch (error) {
    yield put(fetchError('error'));
  }
}

function* dataWasFetched() {
  try {
    yield put(setDataWasFetched());
  } catch (error) {
    yield put(fetchError('error'));
  }
}

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

export function* watchAddTask() {
  yield takeLatest(ADD_TASK, addTask);
}

export function* watchIsDataFetching() {
  yield takeLatest([GET_ME_USER, GET_USERS, GET_PROJECT, GET_BOARDS, GET_TASKS], dataIsBeingFetched);
}

export function* watchReceiveDataFetching() {
  yield takeLatest(RECEIVE_DATA_FETCHED, dataWasFetched);
}
