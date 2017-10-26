import { combineReducers } from 'redux';

import notification from '../Notification/notification.duck';
import addTaskForm from '../RouterContent/Workspace/AddTaskForm/addTaskForm.duck';
import taskDetails from '../RouterContent/Workspace/TaskDetails/taskDetails.duck';
import data from '../utils/axios/axios.duck';

export default combineReducers({
  addTaskForm,
  data,
  notification,
  taskDetails
});
