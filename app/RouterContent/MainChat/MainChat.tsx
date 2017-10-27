import * as React from 'react';
import { connect } from 'react-redux';

import { Chat } from '../../components/Chat/Chat';
import { MainChatDispatchProps, MainChatStateProps } from './MainChatProps';

const styles: any = require('./MainChat.scss');

const CHAT_MESSAGE_OBJECT: any = {
  author: styles.chatMessageAuthor,
  message: styles.chatMessageText
};

class MainChatComponent extends React.Component<MainChatStateProps & MainChatDispatchProps> {

  public state = {
    chatRoom: {
      id: '',
      title: ''
    }
  }

  private renderChatRoom = (): JSX.Element => (
    <Chat
      inputClassName={ styles.chatInput }
      titleClassName={ styles.chatTitle }
      historyClassName={ styles.chatHistory }
      chatClassName={ styles.chatContent }
      messageTextClassName={ styles.chatMessageText }
      messageAuthorClassName={ styles.chatMessageAuthor }
      title={ this.state.chatRoom.title }
      chatRoomId={ this.state.chatRoom.id }
    />
  )

  public render(): JSX.Element {
    return(
      <div className={ styles.content }>
        <div className={ styles.chatRoom }>
        { this.renderChatRoom() }
      </div>
      </div>
    );
  }
}

export const MainChat = connect<MainChatStateProps, MainChatDispatchProps, any>(
  null,
  null
)(MainChatComponent);
