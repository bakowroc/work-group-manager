import { get } from 'lodash';
import { createSelector } from 'reselect';

import { TaskState } from './../task/TaskState';
import { UserState } from './../user/UserState';

export const getMyTasks = createSelector(
  (state: any) => state.users.me,
  (state: any) => state.tasks.data,
  (me: UserState, tasks: Array<TaskState>) =>
    tasks.filter((task: TaskState) => get(task.author, '_id') === get(me, '_id'))
);

export const isDataFetching = createSelector(
  ({tasks: {isFetching}}) => isFetching,
  ({projects: {isFetching}}) => isFetching,
  ({boards: {isFetching}}) => isFetching,
  ({chats: {isFetching}}) => isFetching,
  ({users: {isFetching}}) => isFetching,
  (...args: Array<any>) => args.includes(true)
);
