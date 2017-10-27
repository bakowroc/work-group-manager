import { get } from 'lodash';
import { createSelector } from 'reselect';

import { TaskState } from './../task/TaskState';
import { UserState } from './../user/UserState';

export const getMyTasks = createSelector(
  (state: any) => state.data.me,
  (state: any) => state.data.tasks,
  (me: UserState, tasks: Array<TaskState>) =>
    tasks.filter((task: TaskState) => get(task.author, '_id') === get(me, '_id'))
);
