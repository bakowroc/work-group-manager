import { combineReducers } from 'redux';

import notification from '../Notification/notification.duck';
import data from '../utils/axios/axios.duck';

export default combineReducers({
  data,
  notification,
});
