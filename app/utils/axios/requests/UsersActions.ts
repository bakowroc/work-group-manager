import { createAction } from 'redux-actions';

const FETCH_USERS = 'FETCH_USERS';
const fetchUsersAction = createAction(FETCH_USERS);

const GET_USERS = 'GET_USERS';
const getUsers = createAction<any>(GET_USERS);

export {
  FETCH_USERS,
  fetchUsersAction,
  GET_USERS,
  getUsers
};
