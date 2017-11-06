import * as jwtdecode from 'jwt-decode';
import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';

const FETCH_ME_USER = 'FETCH_ME_USER';
const fetchMeUserAction = createAction(FETCH_ME_USER);

const GET_ME_USER = 'GET_ME_USER';
const getMeUser = createAction<any>(GET_ME_USER);

function* fetchMe() {
  try {
    const {slug} = jwtdecode(localStorage.getItem('jwttoken'));
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, `api/user/${slug}`);
    yield put(getMeUser(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export {
  FETCH_ME_USER,
  fetchMe,
  fetchMeUserAction,
  GET_ME_USER,
  getMeUser
};
