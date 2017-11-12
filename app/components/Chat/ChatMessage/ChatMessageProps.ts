import { UserState } from './../../../data/user/UserState';

export interface ChatMessageProps {
  author: UserState;
  createdAt: Date;
  message: string;
  messageAuthorClassName?: string;
  messageTextClassName?: string;
}
