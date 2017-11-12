import { Action, createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { ProjectState } from '../../../data/project/ProjectState';
import { fetchError } from '../requests/ErrorActions';
import { fetchBoardsAction } from './BoardActions';
import { fetchChatsAction } from './ChatActions';

const FETCH_PROJECT = 'FETCH_PROJECT';
const fetchProjectAction = createAction(FETCH_PROJECT);

const ADD_PROJECT = 'ADD_PROJECT';
const addProjectAction = createAction(ADD_PROJECT);

const GET_PROJECT = 'GET_PROJECT';
const getProject = createAction<any>(GET_PROJECT);

const DEFAULT_PROJECT_STATE: ProjectState = {
  id: 0,
  name: '',
  description: '',
  members: [],
  boards: [],
  createdAt: undefined
};

function* fetchProject() {
  try {
    const {data}: AxiosResponse<Response<any>> = yield call(axios.get, '/api/project');
    const project = data.responseData[0];
    yield [
      put(getProject(project)),
      put(fetchBoardsAction(project._id)),
      put(fetchChatsAction(project._id))
    ];
  } catch {
    yield put(fetchError('error'));
  }
}

function* addProject(action: Action<any>) {
  try {
    yield call(axios.post, '/api/user', action.payload);
  } catch (error) {
    yield put(fetchError(error));
  }
}

export {
  DEFAULT_PROJECT_STATE,
  FETCH_PROJECT,
  ADD_PROJECT,
  addProject,
  addProjectAction,
  fetchProject,
  fetchProjectAction,
  GET_PROJECT,
  getProject
};
