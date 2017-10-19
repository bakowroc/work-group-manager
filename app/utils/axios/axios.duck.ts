import { Action, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from '../../data/AxiosResponse';
import { Response } from '../../data/RequestModel';
import { axios } from './axios';

import {
  FETCH_ERROR,
  fetchError
} from './requests/ErrorActions';

import {
  FETCH_ME_USER,
  GET_ME_USER,
  getMeUser
} from './requests/UserActions';

import {
  FETCH_USERS,
  GET_USERS,
  getUsers
} from './requests/UsersActions';

const initialState = {
  error: '',
  me: {},
  users: [
    {}
  ]
};

export default handleActions({
  [GET_ME_USER]: (state: any, action: Action<any>) => ({...state, me: action.payload}),
  [GET_USERS]: (state: any, action: Action<any>) => ({...state, users: action.payload}),
  [FETCH_ERROR]: (state: any, action: Action<any>) => ({...state, error: action.payload})
}, initialState);

export function *fetchMe() {
  try {
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, '/api/user/bakowroc');
    yield put(getMeUser(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export function *fetchUsers() {
  try {
    const {data}: AxiosResponse<Response<Array<any>>> = yield call(axios.get, '/api/user');
    yield put(getUsers(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export function *watchFetchMeUser() {
  yield takeLatest(FETCH_ME_USER, fetchMe);
}

export function *watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
