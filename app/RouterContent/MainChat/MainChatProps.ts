import { ChatState } from './../../data/chat/ChatState';
import { TaskState } from './../../data/task/TaskState';

export interface MainChatStateProps {
  myTasks: Array<TaskState>;
  chats: Array<ChatState>;
}

export interface MainChatDispatchProps {
  joinChatAction: (room: string) => void;
}
