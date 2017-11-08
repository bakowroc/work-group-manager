import { ChatState } from './../../data/chat/ChatState';
import { TaskState } from './../../data/task/TaskState';
import { UserState } from './../../data/user/UserState';

export interface MainChatStateProps {
  me: UserState;
  myTasks: Array<TaskState>;
  chats: Array<ChatState>;
}

export interface MainChatDispatchProps {
  sendChatMessageAction: (data?: any) => void;
  joinChatAction: (room: string) => void;
}
