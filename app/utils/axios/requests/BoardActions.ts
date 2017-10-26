import { createReqQuery } from './../parsers/query';
import { Action, createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';
import { fetchTasksAction } from './TaskActions';
import { fetchProjectAction } from './ProjectActions';

const FETCH_BOARDS = 'FETCH_BOARDS';
const fetchBoardsAction = createAction<string>(FETCH_BOARDS);

const UPDATE_BOARD = 'UPDATE_BOARD';
const updateBoardAction = createAction<any>(UPDATE_BOARD);

const GET_BOARDS = 'GET_BOARDS';
const getBoards = createAction<any>(GET_BOARDS);

function* fetchBoards(action: Action<string>) {
  try {
    const project = action.payload;
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, `/api/board?project=${project}`);
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

function* updateBoard(action: Action<any>) {
  try {
    yield [
      call(axios.put, `/api/board/${action.payload.slug}`, action.payload.data),
      put(fetchProjectAction())
    ];
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
