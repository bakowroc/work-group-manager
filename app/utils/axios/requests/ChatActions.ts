import { Action, createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';

export const FETCH_CHATS = 'FETCH_CHATS';
export const fetchChatsAction = createAction<any>(FETCH_CHATS);

export const ADD_CHAT = 'ADD_CHAT';
export const addChatAction = createAction<any>(ADD_CHAT);

export const GET_CHATS = 'GET_CHATS';
export const getChats = createAction<any>(GET_CHATS);

const IS_CHATS_FETCHING = 'IS_CHATS_FETCHING';
const isChatsFetching = createAction<any>(IS_CHATS_FETCHING);

const initialState: any = {
  data: [],
  isFetching: false
};

export default handleActions({
  [GET_CHATS]: (state: any, action: Action<any>) => ({...state, data: action.payload, isFetching: false}),
  [IS_CHATS_FETCHING]: (state: any, action: Action<any>) => ({...state, isFetching: action.payload}),
}, initialState);

export function* addChat(action: Action<any>) {
  try {
    yield call(axios.post, `/api/chat`, action.payload);
  } catch {
    yield put(fetchError('error'));
  }
}

export function* fetchChats(action: Action<string>) {
  try {
    yield put(isChatsFetching(true));
    const {data}: AxiosResponse<Response<Array<any>>> = yield call(axios.get, `/api/chat?project=${action.payload}`);
    yield put(getChats(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export function* watchFetchChats() {
  yield takeLatest(FETCH_CHATS, fetchChats);
}

export function* watchAddChats() {
  yield takeLatest(ADD_CHAT, addChat);
}
