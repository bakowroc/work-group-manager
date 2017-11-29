import * as jwtdecode from 'jwt-decode';
import { Action, createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';
import { fetchBoardsAction } from './BoardActions';
import { addChatAction, fetchChatsAction } from './ChatActions';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const fetchProjectsAction = createAction(FETCH_PROJECTS);

export const FETCH_MY_PROJECT = 'FETCH_MY_PROJECT';
export const fetchMyProjectAction = createAction(FETCH_MY_PROJECT);

export const ADD_PROJECT = 'ADD_PROJECT';
export const addProjectAction = createAction<any>(ADD_PROJECT);

export const GET_PROJECTS = 'GET_PROJECTS';
export const getProjects = createAction<any>(GET_PROJECTS);

export const GET_MY_PROJECT = 'GET_MY_PROJECT';
export const getMyProject = createAction<any>(GET_MY_PROJECT);

const IS_PROJECTS_FETCHING = 'IS_PROJECTS_FETCHING';
const isProjectsFetching = createAction<any>(IS_PROJECTS_FETCHING);

export const initialState: any = {
  data: [],
  self: {
    name: ''
  },
  isFetching: false
};

export default handleActions({
  [GET_PROJECTS]: (state: any, action: Action<any>) => ({...state, data: action.payload, isFetching: false}),
  [GET_MY_PROJECT]: (state: any, action: Action<any>) => ({...state, self: action.payload, isFetching: false}),
  [IS_PROJECTS_FETCHING]: (state: any, action: Action<any>) => ({...state, isFetching: action.payload}),
}, initialState);

export function* fetchMyProject() {
  try {
    yield put(isProjectsFetching(true));
    const {project} = jwtdecode(localStorage.getItem('jwttoken'));
    const {data: {responseData}}: AxiosResponse<Response<any>> = yield call(axios.get, `api/project/${project.slug}`);
    yield [
      put(getMyProject(responseData)),
      put(fetchBoardsAction(project.id)),
      put(fetchChatsAction(project.id))
    ];
  } catch {
    yield put(fetchError('error'));
  }
}

export function* fetchProjects() {
  try {
    yield put(isProjectsFetching(true));
    const {data: {responseData}}: AxiosResponse<Response<any>> = yield call(axios.get, `api/project`);
    yield put(getProjects(responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export function* addProject(action: Action<any>) {
  try {
    const {data: {responseData: {_id, members}}} = yield call(axios.post, '/api/project', action.payload);
    yield put(addChatAction({data: {project: _id, name: 'random', members}}));
  } catch (error) {
    yield put(fetchError(error));
  }
}

export function* watchFetchProject() {
  yield takeLatest(FETCH_PROJECTS, fetchProjects);
}

export function* watchFetchMyProject() {
  yield takeLatest(FETCH_MY_PROJECT, fetchMyProject);
}

export function* watchAddProject() {
  yield takeLatest(ADD_PROJECT, addProject);
}
