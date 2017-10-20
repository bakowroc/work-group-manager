import { ProjectState } from './../data/project/ProjectState';

export interface NavigationDispatchProps {
  toggleNotification: () => void;
}

export interface NavigationStateProps {
  project: ProjectState;
}
