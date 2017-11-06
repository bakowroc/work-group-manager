import { isEmpty } from 'lodash';
import { Action, createAction } from 'redux-actions';
import { call } from 'redux-saga/effects';

import { axios } from '../axios';
import { fetchError } from '../requests/ErrorActions';

const AUTHENTICATE = 'AUTHENTICATE';
const authenticateAction = createAction<any>(AUTHENTICATE);

function* authenticateUser(action: Action<any>) {
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

export {
  AUTHENTICATE,
  authenticateAction,
  authenticateUser
};
