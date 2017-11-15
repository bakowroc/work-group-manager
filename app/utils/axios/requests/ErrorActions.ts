import { createAction } from 'redux-actions';

export const FETCH_ERROR = 'FETCH_ME_ERROR';
export const fetchError = createAction<any>(FETCH_ERROR);
