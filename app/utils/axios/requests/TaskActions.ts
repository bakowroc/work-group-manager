import { Action, createAction} from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';
import { updateBoard } from './BoardActions';

const FETCH_TASKS = 'FETCH_TASKS';
const fetchTasksAction = createAction(FETCH_TASKS);

const ADD_TASK = 'ADD_TASK';
const addTaskAction = createAction<any>(ADD_TASK);

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

function* addTask(action: Action<any>) {
  try {
    const newTaskBody = action.payload.task;
    const toUpdateBoard = action.payload.board;
    const {data}: AxiosResponse<Response<any>> = yield call(axios.post, '/api/task', newTaskBody);
    yield updateBoard(toUpdateBoard);
  } catch (error) {
    yield put(fetchError('error'));
  }
}

export {
  ADD_TASK,
  addTask,
  addTaskAction,
  FETCH_TASKS,
  fetchTasks,
  fetchTasksAction,
  GET_TASKS,
  getTasks
};
