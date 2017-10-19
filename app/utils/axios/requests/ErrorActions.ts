import { createAction } from 'redux-actions';

const FETCH_ERROR = 'FETCH_ME_ERROR';
const fetchError = createAction<any>(FETCH_ERROR);

export {
  FETCH_ERROR,
  fetchError
};
