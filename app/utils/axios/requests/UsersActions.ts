import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';

const FETCH_USERS = 'FETCH_USERS';
const fetchUsersAction = createAction(FETCH_USERS);

const GET_USERS = 'GET_USERS';
const getUsers = createAction<any>(GET_USERS);

function* fetchUsers() {
  try {
    const {data}: AxiosResponse<Response<Array<any>>> = yield call(axios.get, '/api/user');
    yield put(getUsers(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export {
  FETCH_USERS,
  fetchUsers,
  fetchUsersAction,
  GET_USERS,
  getUsers
};
