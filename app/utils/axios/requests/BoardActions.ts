import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';

const FETCH_BOARDS = 'FETCH_BOARDS';
const fetchBoardsAction = createAction(FETCH_BOARDS);

const GET_BOARDS = 'GET_BOARDS';
const getBoards = createAction<any>(GET_BOARDS);

function* fetchBoards() {
  try {
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, '/api/board');
    yield put(getBoards(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export {
  FETCH_BOARDS,
  fetchBoards,
  fetchBoardsAction,
  GET_BOARDS,
  getBoards
};
