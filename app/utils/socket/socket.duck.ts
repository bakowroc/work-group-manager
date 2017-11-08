import { createAction } from 'redux-actions';
import { takeEvery, takeLatest } from 'redux-saga/effects';

import { socketMiddleware } from './../../middleware/socket';

const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE';
export const sendChatMessageAction = createAction<any>(SEND_CHAT_MESSAGE);

const JOIN_CHAT = 'JOIN_CHAT';
export const joinChatAction = createAction<any>(JOIN_CHAT);

function sendChatMessage(action: any) {
  socketMiddleware.emit('newMessageEmit', action.payload);
}

function joinChat(action: any) {
  console.log('calling join')
  socketMiddleware.emit('joinChatRoom', action.payload);
}

export function* watchNewChatMessage() {
  yield takeEvery(SEND_CHAT_MESSAGE, sendChatMessage);
}

export function* watchJoinChat() {
  yield takeLatest(JOIN_CHAT, joinChat);
}
