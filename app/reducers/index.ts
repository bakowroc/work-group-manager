import { combineReducers } from 'redux';

import confirm from '../components/Confirm/confirm.duck';
import snackbar from '../components/Snackbar/snackbar.duck';
import notification from '../Notification/notification.duck';
import addTaskForm from '../RouterContent/Workspace/AddTaskForm/addTaskForm.duck';
import taskDetails from '../RouterContent/Workspace/TaskDetails/taskDetails.duck';
import data from '../utils/axios/axios.duck';

export default combineReducers({
  addTaskForm,
  confirm,
  data,
  notification,
  taskDetails,
  snackbar
});
