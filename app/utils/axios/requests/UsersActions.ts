import * as jwtdecode from 'jwt-decode';
import { Action, createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';
import { fetchError } from '../requests/ErrorActions';
import { addProjectAction } from './ProjectActions';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsersAction = createAction(FETCH_USERS);

export const ADD_USER = 'ADD_USER';
export const addUserAction = createAction(ADD_USER);

export const GET_USERS = 'GET_USERS';
export const getUsers = createAction<any>(GET_USERS);

export const FETCH_ME_USER = 'FETCH_ME_USER';
export const fetchMeUserAction = createAction(FETCH_ME_USER);

export const GET_ME_USER = 'GET_ME_USER';
export const getMeUser = createAction<any>(GET_ME_USER);

const IS_USERS_FETCHING = 'IS_USERS_FETCHING';
const isUsersFetching = createAction<any>(IS_USERS_FETCHING);

const initialState: any = {
  me: {},
  data: [],
  isFetching: false
};

export default handleActions({
  [GET_ME_USER]: (state: any, action: Action<any>) => ({...state, me: action.payload}),
  [GET_USERS]: (state: any, action: Action<any>) => ({...state, data: action.payload, isFetching: false}),
  [IS_USERS_FETCHING]: (state: any, action: Action<any>) => ({...state, isFetching: action.payload}),
}, initialState);

export function* fetchUsers() {
  try {
    yield put(isUsersFetching(true));
    const {data}: AxiosResponse<Response<Array<any>>> = yield call(axios.get, '/api/user');
    yield put(getUsers(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export function* addUser(action: Action<any>) {
  try {
    const {data: {responseData}} = yield call(axios.post, '/api/project', action.payload.user);
    const user = responseData;
    yield addProjectAction({
      ...action.payload.project,
      members: [user._id]
    });
  } catch (error) {
    yield put(fetchError(error));
  }
}

export function* fetchMe() {
  try {
    const {me} = jwtdecode(localStorage.getItem('jwttoken'));
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, `api/user/${me}`);
    yield put(getMeUser(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export function* watchFetchMe() {
  yield takeLatest(FETCH_ME_USER, fetchMe);
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

export function* watchAddUser() {
  yield takeLatest(ADD_USER, addUser);
}
