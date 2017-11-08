export interface ChatProps {
  chatClassName?: string;
  inputClassName?: string;
  titleClassName?: string;
  historyClassName?: string;
  messageAuthorClassName?: string;
  messageTextClassName?: string;
  chatRoomId: string;
  title: string;
  placeholder?: string;
  onMessageSent: (data: any) => void;
  data: Array<any>;
}
