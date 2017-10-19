import { createAction, handleActions } from 'redux-actions';

const TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION';
export const toggleNotification = createAction(TOGGLE_NOTIFICATION);

const initialState = {
  isOpen: false
};

export default handleActions({
  [TOGGLE_NOTIFICATION]: (state: any) => ({...state, isOpen: !state.isOpen})
}, initialState);
