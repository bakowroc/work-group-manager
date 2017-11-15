import { combineReducers } from 'redux';

import confirm from '../components/Confirm/confirm.duck';
import snackbar from '../components/Snackbar/snackbar.duck';
import notification from '../Notification/notification.duck';
import addTaskForm from '../RouterContent/Workspace/AddTaskForm/addTaskForm.duck';
import taskDetails from '../RouterContent/Workspace/TaskDetails/taskDetails.duck';
import boards from '../utils/axios/requests/BoardActions';
import chats from '../utils/axios/requests/ChatActions';
import projects from '../utils/axios/requests/ProjectActions';
import tasks from '../utils/axios/requests/TaskActions';
import users from '../utils/axios/requests/UsersActions';

export default combineReducers({
  addTaskForm,
  boards,
  chats,
  confirm,
  notification,
  projects,
  taskDetails,
  tasks,
  users,
  snackbar
});
