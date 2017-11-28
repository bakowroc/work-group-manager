import { ProjectState } from './../data/project/ProjectState';
import { UserState } from './../data/user/UserState';

export interface RegisterStateProps {
  users: Array<UserState>;
  projects: Array<ProjectState>;
}

export interface RegisterDispatchProps {
  addUserAction: (payload: any) => void;
}
