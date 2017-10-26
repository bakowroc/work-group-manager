import { combineReducers } from 'redux';

import notification from '../Notification/notification.duck';
import addTaskForm from '../RouterContent/Workspace/Board/AddTaskForm/addTaskForm.duck';
import taskDetails from '../RouterContent/Workspace/Board/TaskDetails/taskDetails.duck';
import data from '../utils/axios/axios.duck';

export default combineReducers({
  addTaskForm,
  data,
  notification,
<<<<<<< Updated upstream
=======
  taskDetails
>>>>>>> Stashed changes
});
