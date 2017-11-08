import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../../components/Button';
import { Chat } from '../../components/Chat/Chat';
import { Menu } from '../../components/Menu';
import { MenuItem } from '../../components/Menu/MenuItem';
import { Tabs } from '../../components/Tabs/Tabs';
import { Switch } from '../../components/Tabs/TabsProps';
import { getMyTasks } from '../../data/selectors/dataSelectors';
import { socketMiddleware } from '../../middleware/socket';
import { joinChatAction, sendChatMessageAction } from '../../utils/socket/socket.duck';
import { MainChatDispatchProps,  MainChatStateProps } from './MainChatProps';

const styles: any = require('./MainChat.scss');

class MainChatComponent extends React.Component<MainChatStateProps & MainChatDispatchProps> {

  public state = {
    id: location.search,
    title: '',
    history: [{}]
  };

  private getChatTabs = (): Array<Switch> => [
    {
      label: 'General rooms',
      content: this.renderChatRoomsList()
    },
    {
      label: 'Tasks rooms',
      content: this.renderTasksChatRoomsList()
    }
  ]

  private onSendMessage = (data: any) => {
    const message = {
      author: this.props.me._id,
      message: data,
      chat: '5a03149271efd9ba9067cf7a',
    };

    this.props.sendChatMessageAction(message);
  }

  private onChangeRoom = (chat: any) => {
    this.setState((prev) => ({
      ...prev,
      id: chat.id,
      title: chat.title
    }));

    this.props.joinChatAction(chat._id);
  }

  private renderChatRoom = (): JSX.Element => (
    <Chat
      inputClassName={ styles.chatInput }
      titleClassName={ styles.chatTitle }
      historyClassName={ styles.chatHistory }
      chatClassName={ styles.chatContent }
      messageTextClassName={ styles.chatMessageText }
      messageAuthorClassName={ styles.chatMessageAuthor }
      title={ this.state.title }
      chatRoomId={ this.state.id }
      placeholder="Share your thoughts!"
      onMessageSent={ this.onSendMessage }
      data={ this.state.history }
    />
  )

  private renderSidebar = (): JSX.Element => (
    <Tabs
      menuClassName={ styles.tabsMenu }
      switchClassName={ styles.tabsSwitch }
      activeSwitchClassName={ styles.tabsActiveSwitch }
      items={ this.getChatTabs() }
    />
  )

  private renderTasksChatRoomsList = (): JSX.Element => (
    <div>
      { this.props.myTasks.map((task, key: number) => (
        <Button
          key={key }
          label={ `@ ${task.name}` }
          flat={ true }
          onClick={ () => this.onChangeRoom({id: task._id, title: task.name}) }
        />
      )) }
    </div>
  )

  private renderChatRoomsList = (): Array<JSX.Element> => this.props.chats.map((chat, key: number) => (
    <div key={ key } >
      { chat.name }
    </div>
  ))

  private watchChatActivity = () => {
    socketMiddleware.watch('someoneJoins', console.log);
    socketMiddleware.watch('returnChatMessage', (data: any) => {
      this.setState((prev: any) => ({
        ...prev,
        history: [ ...prev.history, ...data]
      }));
    });
  }

  public render(): JSX.Element {
    if (this.state.id.length > 0) {
      this.props.joinChatAction(this.state.id);
    }

    this.watchChatActivity();

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

const mapStateToProps = (state: any): MainChatStateProps => ({
  me: state.data.me,
  myTasks: getMyTasks(state),
  chats: state.data.chats
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  sendChatMessageAction,
  joinChatAction
}, dispatch);

export const MainChat = connect<MainChatStateProps, MainChatDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(MainChatComponent);
