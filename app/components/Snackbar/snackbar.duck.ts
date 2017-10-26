import { Action, createAction, handleActions } from 'redux-actions';

import { SnackbarMessage } from './SnackbarProps';

const TOGGLE_SNACKBAR = 'TOGGLE_SNACKBAR';
export const toggleSnackbar = createAction<SnackbarMessage>(TOGGLE_SNACKBAR);

const initialState = {
  isOpen: false,
  message: ''
};

export default handleActions({
  [TOGGLE_SNACKBAR]: (state: any, action: Action<SnackbarMessage>) => ({
    ...state,
    isOpen: !state.isOpen,
    message: action.payload
  })
}, initialState)