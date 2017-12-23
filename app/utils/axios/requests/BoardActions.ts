import { Action, createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios, headers } from '../axios';
import { createReqQuery } from '../parsers/query';
import { fetchError } from '../requests/ErrorActions';
import { fetchMyProjectAction } from './ProjectActions';
import { fetchTasksAction } from './TaskActions';

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const fetchBoardsAction = createAction<string>(FETCH_BOARDS);

export const ADD_BOARD = 'ADD_BOARD';
export const addBoardAction = createAction<any>(ADD_BOARD);

export const UPDATE_BOARD = 'UPDATE_BOARD';
export const updateBoardAction = createAction<any>(UPDATE_BOARD);

export const DELETE_BOARD = 'DELETE_BOARD';
export const deleteBoardAction = createAction<any>(DELETE_BOARD);

export const GET_BOARDS = 'GET_BOARDS';
export const getBoards = createAction<any>(GET_BOARDS);

const IS_BOARDS_FETCHING = 'IS_BOARDS_FETCHING';
const isBoardFetching = createAction<any>(IS_BOARDS_FETCHING);

const initialState: any = {
  data: [],
  isFetching: false
};

export default handleActions({
  [GET_BOARDS]: (state: any, action: Action<any>) => ({...state, data: action.payload, isFetching: false}),
  [IS_BOARDS_FETCHING]: (state: any, action: Action<any>) => ({...state, isFetching: action.payload}),
}, initialState);

export function* fetchBoards(action: Action<string>) {
  try {
    const project = action.payload;
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, `/api/board?project=${project}`, {headers});
    const boards = data.responseData;
    const getTaskQuery = createReqQuery(boards, 'board');
    yield [
      put(getBoards(boards)),
      put(fetchTasksAction(getTaskQuery))
    ];
  } catch {
    yield put(fetchError('error'));
  }
}

export function* updateBoard(action: Action<any>) {
  try {
    yield [
      call(axios.put, `/api/board/${action.payload.slug}`, action.payload.data),
      put(fetchMyProjectAction())
    ];
  } catch (error) {
    yield fetchError('error');
  }
}

export function* addBoard(action: Action<any>) {
  try {
    yield [
      put(isBoardFetching(true)),
      call(axios.post, `/api/board`, action.payload),
      put(fetchMyProjectAction())
    ];
  } catch (error) {
    yield fetchError('error');
  }
}

export function* deleteBoard(action: Action<any>) {
  try {
    yield [
      put(isBoardFetching(true)),
      call(axios.delete, `/api/board/${action.payload.slug}`),
      put(fetchMyProjectAction())
    ];
  } catch (err) {
    yield fetchError('err');
  }
}

export function* watchFetchBoards() {
  yield takeLatest(FETCH_BOARDS, fetchBoards);
}

export function* watchAddBoard() {
  yield takeEvery(ADD_BOARD, addBoard);
}

export function* watchUpdateBoard() {
  yield takeEvery(UPDATE_BOARD, updateBoard);
}

export function* watchDeleteBoard() {
  yield takeEvery(DELETE_BOARD, deleteBoard);
}
