import { Action, createAction, handleActions } from 'redux-actions';
import { put, takeLatest } from 'redux-saga/effects';

// import Axios from 'axios';

const GET_ME_USER = 'GET_ME_USER';
const getMeUser = createAction(GET_ME_USER);

const FETCH_ME_ERROR = 'FETCH_ME_ERROR';
const fetchMeError = createAction(FETCH_ME_ERROR);

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

function *fetchMe() {
  try {
    // const {user} = yield call(axios.get, '/api/user');
    yield put(getMeUser());
  } catch {
    yield put(fetchMeError());
  }
}

export function *watchFetchMeUser() {
  yield takeLatest(FETCH_ME_USER, fetchMe);
}
