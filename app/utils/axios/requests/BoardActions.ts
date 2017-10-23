import { Action, createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';

const FETCH_BOARDS = 'FETCH_BOARDS';
const fetchBoardsAction = createAction(FETCH_BOARDS);

const UPDATE_BOARD = 'UPDATE_BOARD';
const updateBoardAction = createAction<any>(UPDATE_BOARD);

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

function* updateBoard(action: Action<any>) {
  try {
    const boardSlug = action.payload.slug;
    const toUpdateData = action.payload.data;
    yield call(axios.put, `/api/board${boardSlug}`, toUpdateData);
    yield put(fetchBoardsAction());
  } catch (error) {
    yield fetchError('error');
  }
}

export {
  FETCH_BOARDS,
  fetchBoards,
  fetchBoardsAction,
  GET_BOARDS,
  getBoards,
  UPDATE_BOARD,
  updateBoard,
  updateBoardAction
};
