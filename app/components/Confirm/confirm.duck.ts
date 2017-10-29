import { createAction, handleActions } from 'redux-actions';

const TOGGLE_CONFIRM = 'TOGGLE_CONFIRM';
export const toggleConfirm = createAction(TOGGLE_CONFIRM);

const initialState = {
  isOpen: false
};

export default handleActions({
  [TOGGLE_CONFIRM]: (state: any) => ({...state, isOpen: !state.isOpen})
}, initialState);
