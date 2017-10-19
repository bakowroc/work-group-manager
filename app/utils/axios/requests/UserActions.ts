import { createAction } from 'redux-actions';

const FETCH_ME_USER = 'FETCH_ME_USER';
const fetchMeUserAction = createAction(FETCH_ME_USER);

const GET_ME_USER = 'GET_ME_USER';
const getMeUser = createAction<any>(GET_ME_USER);

export {
  FETCH_ME_USER,
  fetchMeUserAction,
  GET_ME_USER,
  getMeUser
};
