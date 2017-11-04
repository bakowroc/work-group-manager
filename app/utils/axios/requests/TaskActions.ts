import { Action, createAction} from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';
import { fillCollection } from '../parsers/collection';
import { toggleTaskDetails } from './../../../RouterContent/Workspace/TaskDetails/taskDetails.duck';

import { fetchError } from '../requests/ErrorActions';
import { updateBoardAction } from './BoardActions';
import { fetchProjectAction } from './ProjectActions';

const FETCH_TASKS = 'FETCH_TASKS';
const fetchTasksAction = createAction<string>(FETCH_TASKS);

const ADD_TASK = 'ADD_TASK';
const addTaskAction = createAction<any>(ADD_TASK);

const UPDATE_TASK = 'UPDATE_TASK';
const updateTaskAction = createAction<any>(UPDATE_TASK);

const DELETE_TASK = 'DELETE_TASK';
const deleteTaskAction = createAction<any>(DELETE_TASK);

const GET_TASKS = 'GET_TASKS';
const getTasks = createAction<any>(GET_TASKS);

function* fetchTasks(action: Action<string>) {
  try {
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, `/api/task${action.payload}`);
    yield put(getTasks(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

function* addTask(action: Action<any>) {
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

function* updateTask(action: Action<any>) {
  try {
    yield call(axios.put, `/api/task/${action.payload.slug}`, action.payload.data)

    if (!action.payload.noUpdate) {
      yield put(fetchProjectAction());
    }
  } catch (error) {
    yield fetchError('error');
  }
}

function* deleteTask(action: Action<any>) {
  try {
    yield [
      call(axios.delete, `/api/task/${action.payload.slug}`),
      put(fetchProjectAction())
    ];
  } catch (error) {
    yield fetchError('error');
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
  getTasks,
  UPDATE_TASK,
  updateTask,
  updateTaskAction,
  DELETE_TASK,
  deleteTask,
  deleteTaskAction
};
