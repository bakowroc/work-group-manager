import { createAction, handleActions } from 'redux-actions';

const TOGGLE_ADD_BOARD_FORM = 'TOGGLE_ADD_BOARD_FORM';
export const toggleAddBoardForm = createAction(TOGGLE_ADD_BOARD_FORM);

const initialState: any = {
  isOpen: false,
};

export default handleActions({
  [TOGGLE_ADD_BOARD_FORM]: (state: any) => ({
    ...state,
    isOpen: !state.isOpen
  })
}, initialState);
