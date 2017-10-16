import { head } from 'lodash';
import { Action, createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

import { axios } from './axios';

const GET_ME_USER = 'GET_ME_USER';
const getMeUser = createAction<any>(GET_ME_USER);

const FETCH_ME_ERROR = 'FETCH_ME_ERROR';
const fetchMeError = createAction<any>(FETCH_ME_ERROR);

const FETCH_ME_USER = 'FETCH_ME_USER';
export const fetchMeUser = createAction(FETCH_ME_USER);

const initialState = {
  error: '',
  me: {}
};

export default handleActions({
  [GET_ME_USER]: (state: any, action: Action<any>) => ({...state, me: action.payload}),
  [FETCH_ME_ERROR]: (state: any, action: Action<any>) => ({...state, error: action.payload})
}, initialState);

export function *fetchMe() {
  try {
    const {data} = yield call(axios.get, '/api/user/bakowroc');
    yield put(getMeUser(data.responseData));
  } catch {
    yield put(fetchMeError('error'));
  }
}

export function *watchFetchMeUser() {
  yield takeLatest(FETCH_ME_USER, fetchMe);
}
