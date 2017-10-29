import { Action, createAction, handleActions } from 'redux-actions';

import { TaskProps } from '../Board/Task/TaskProps';

const TOGGLE_TASK_DETAILS = 'TOGGLE_TASK_DETAILS';
export const toggleTaskDetails = createAction<TaskProps>(TOGGLE_TASK_DETAILS);

const initialState = {
  isOpen: false,
  currentTask: {
    author: {
      username: ''
    }
  }
};

export default handleActions({
  [TOGGLE_TASK_DETAILS]: (state: any, action?: Action<TaskProps>) => ({
    ...state,
    isOpen: !state.isOpen,
    currentTask: action.payload || initialState.currentTask
  }),
}, initialState);
