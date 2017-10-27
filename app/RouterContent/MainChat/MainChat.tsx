import * as React from 'react';
import { connect } from 'react-redux';

import { Chat } from '../../components/Chat/Chat';
import { Tabs } from '../../components/Tabs/Tabs';
import { Switch } from '../../components/Tabs/TabsProps';

const styles: any = require('./MainChat.scss');

const CHAT_TABS: Array<Switch> = [
  {
    label: 'Casual',
    content: 'dupa'
  },
  {
    label: 'Tasks',
    content: 'tasks'
  }
];

class MainChatComponent extends React.Component<{}> {

  public state = {
    chatRoom: {
      id: '',
      title: ''
    }
  };

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
      placeholder="Share your thoughts!"
    />
  )

  private renderSidebar = (): JSX.Element => (
    <Tabs items={ CHAT_TABS } />
  )

  public render(): JSX.Element {
    return(
      <div className={ styles.content }>
        <div className={ styles.chatRoom }>
        { this.renderChatRoom() }
      </div>
      <div className={ styles.chatSidebar }>
        { this.renderSidebar() }
      </div>
      </div>
    );
  }
}

export const MainChat = connect<any, any, any>(
  null,
  null
)(MainChatComponent);
