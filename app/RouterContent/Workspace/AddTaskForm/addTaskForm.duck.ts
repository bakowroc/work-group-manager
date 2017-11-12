import { Action, createAction, handleActions } from 'redux-actions';

import { BoardState } from '../../../data/board/BoardState';

const TOGGLE_ADD_TASK_FORM = 'TOGGLE_ADD_TASK_FORM';
export const toggleAddTaskForm = createAction(TOGGLE_ADD_TASK_FORM);

const initialState: any = {
  isOpen: false,
  board: []
};

export default handleActions({
  [TOGGLE_ADD_TASK_FORM]: (state: any, action?: Action<BoardState>) => ({
    ...state,
    isOpen: !state.isOpen,
    board: action.payload || {}
  })
}, initialState);
