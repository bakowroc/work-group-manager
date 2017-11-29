import { Action, createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';
import { fillCollection } from '../parsers/collection';
import { toggleTaskDetails } from './../../../RouterContent/Workspace/TaskDetails/taskDetails.duck';

import { fetchError } from '../requests/ErrorActions';
import { updateBoardAction } from './BoardActions';
import { fetchMyProjectAction } from './ProjectActions';

const FETCH_TASKS = 'FETCH_TASKS';
export const fetchTasksAction = createAction<string>(FETCH_TASKS);

const ADD_TASK = 'ADD_TASK';
export const addTaskAction = createAction<any>(ADD_TASK);

const UPDATE_TASK = 'UPDATE_TASK';
export const updateTaskAction = createAction<any>(UPDATE_TASK);

const DELETE_TASK = 'DELETE_TASK';
export const deleteTaskAction = createAction<any>(DELETE_TASK);

const GET_TASKS = 'GET_TASKS';
const getTasks = createAction<any>(GET_TASKS);

const IS_TASKS_FETCHING = 'IS_TASKS_FETCHING';
const isTasksFetching = createAction<any>(IS_TASKS_FETCHING);

const initialState: any = {
  data: [],
  isFetching: false
};

export default handleActions({
  [GET_TASKS]: (state: any, action: Action<any>) => ({...state, data: action.payload, isFetching: false}),
  [IS_TASKS_FETCHING]: (state: any, action: Action<any>) => ({...state, isFetching: action.payload}),
}, initialState);

export function* fetchTasks(action: Action<string>) {
  try {
    yield put(isTasksFetching(true));
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, `/api/task${action.payload}`);
    yield put(getTasks(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export function* addTask(action: Action<any>) {
  try {
    const {dataPayload, openDetails} = action.payload;
    const {data}: AxiosResponse<Response<any>> = yield call(axios.post, '/api/task', dataPayload.task);
    const toUpdateBoard = {
      slug: dataPayload.board.slug,
      data: {
        tasks: [...fillCollection(dataPayload.board.tasks), data.responseData._id]
      }
    };

    if (data.responseData._id) {
      yield put(updateBoardAction(toUpdateBoard));
      if (openDetails) {
        yield put(toggleTaskDetails(data.responseData));
      }
    }
  } catch (error) {
    yield put(fetchError('error'));
  }
}

export function* updateTask(action: Action<any>) {
  try {
    yield call(axios.put, `/api/task/${action.payload.slug}`, action.payload.data);

    if (!action.payload.noUpdate) {
      yield put(fetchMyProjectAction());
    }
  } catch (error) {
    yield fetchError('error');
  }
}

export function* deleteTask(action: Action<any>) {
  try {
    yield [
      call(axios.delete, `/api/task/${action.payload.slug}`),
      put(fetchMyProjectAction())
    ];
  } catch (error) {
    yield fetchError('error');
  }
}

export function* watchFetchTasks() {
  yield takeLatest(FETCH_TASKS, fetchTasks);
}

export function* watchAddTask() {
  yield takeLatest(ADD_TASK, addTask);
}

export function* watchUpdateTask() {
  yield takeEvery(UPDATE_TASK, updateTask);
}

export function* watchDeleteTask() {
  yield takeLatest(DELETE_TASK, deleteTask);
}
