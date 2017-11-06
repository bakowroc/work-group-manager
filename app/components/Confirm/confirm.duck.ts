import { Action, createAction, handleActions } from 'redux-actions';

const TOGGLE_CONFIRM = 'TOGGLE_CONFIRM';
export const toggleConfirm = createAction<any>(TOGGLE_CONFIRM);

export const initialState = {
  isOpen: false,
  label: '',
  message: '',
  onConfirm: ''
};

export default handleActions({
  [TOGGLE_CONFIRM]: (state: any, action: Action<any>) => ({
    ...state,
    isOpen: !state.isOpen,
    label: action.payload.label,
    message: action.payload.message,
    onConfirm: action.payload.onConfirm
  })
}, initialState);
