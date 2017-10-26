import * as React from 'react';
import { Action, createAction, handleActions } from 'redux-actions';

const TOGGLE_ADD_TASK_FORM = 'TOGGLE_ADD_TASK_FORM';
export const toggleAddTaskForm = createAction(TOGGLE_ADD_TASK_FORM);

const initialState = {
  isOpen: false
};

export default handleActions({
  [TOGGLE_ADD_TASK_FORM]: (state: any) => ({...state, isOpen: !state.isOpen})
}, initialState);
