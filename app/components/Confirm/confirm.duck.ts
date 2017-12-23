import { Action, createAction, handleActions } from 'redux-actions';

const OPEN_CONFIRM = 'OPEN_CONFIRM';
export const openConfirm = createAction<any>(OPEN_CONFIRM);
const CLOSE_CONFIRM = 'CLOSE_CONFIRM';
export const closeConfirm = createAction(CLOSE_CONFIRM);

export const initialState = {
  isOpen: false,
  label: '',
  message: '',
  onConfirm: ''
};

export default handleActions({
  [OPEN_CONFIRM]: (state: any, action: Action<any>) => ({
    ...state,
    isOpen: true,
    label: action.payload.label,
    message: action.payload.message,
    onConfirm: action.payload.onConfirm
  }),
  [CLOSE_CONFIRM]: (state: any) => ({isOpen: false})
}, initialState);
