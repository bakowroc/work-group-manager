import { ChatState } from '../../data/chat/ChatState';
import { UserState } from '../../data/user/UserState';

export interface ChatProps {
  chatClassName?: string;
  inputClassName?: string;
  titleClassName?: string;
  historyClassName?: string;
  messageAuthorClassName?: string;
  messageTextClassName?: string;
  title?: string;
  placeholder?: string;
  default: ChatState;
  noDescription?: boolean;
}

export interface ChatStateProps {
  me: UserState;
}

export interface ChatDispatchProps {
  joinChatAction: (payload: any) => void;
  sendChatMessageAction: (payload: any) => void;
}
