import { Action, createAction } from 'redux-actions';
import { call, put } from 'redux-saga/effects';

import { AxiosResponse } from '../../../data/AxiosResponse';
import { Response } from '../../../data/RequestModel';
import { axios } from '../axios';

import { fetchError } from '../requests/ErrorActions';

const FETCH_CHATS = 'FETCH_CHATS';
const fetchChatsAction = createAction<any>(FETCH_CHATS);

const GET_CHATS = 'GET_CHATS';
const getChats = createAction<any>(GET_CHATS);

function* fetchChats(action: Action<string>) {
  try {
    const {data}: AxiosResponse<Response<Array<any>>> = yield call(axios.get, `/api/chat`);
    yield put(getChats(data.responseData));
  } catch {
    yield put(fetchError('error'));
  }
}

export {
  FETCH_CHATS,
  fetchChats,
  fetchChatsAction,
  GET_CHATS,
  getChats
};
