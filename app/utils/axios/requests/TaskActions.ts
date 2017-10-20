import { createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';

const FETCH_TASKS = 'FETCH_TASKS';
const fetchTasksAction = createAction(FETCH_TASKS);

const GET_TASKS = 'GET_TASKS';
const getTasks = createAction<any>(GET_TASKS);

function* fetchTasks() {
  try {
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, '/api/task');
    yield put(getTasks(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export {
  FETCH_TASKS,
  fetchTasks,
  fetchTasksAction,
  GET_TASKS,
  getTasks
};
