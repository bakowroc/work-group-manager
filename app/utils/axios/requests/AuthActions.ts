import { isEmpty } from 'lodash';
import { Action, createAction } from 'redux-actions';
import { call, takeLatest } from 'redux-saga/effects';

import { axios } from '../axios';
import { fetchError } from '../requests/ErrorActions';

export const AUTHENTICATE = 'AUTHENTICATE';
export const authenticateAction = createAction<any>(AUTHENTICATE);

export function* authenticateUser(action: Action<any>) {
  try {
    const {data} = yield call(axios.post, `/api/user/auth`, action.payload);
    const response = data.responseData;
    if (!isEmpty(response)) {
      localStorage.setItem('jwttoken', response.jwttoken);
      location.replace('/');
    }
  } catch (error) {
    yield fetchError('error');
  }
}

export function* watchAuthenticate() {
  yield takeLatest(AUTHENTICATE, authenticateUser);
}
