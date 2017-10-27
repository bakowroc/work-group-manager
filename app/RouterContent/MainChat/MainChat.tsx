import * as React from 'react';
import { connect } from 'react-redux';

import { Chat } from '../../components/Chat/Chat';
import { Menu } from '../../components/Menu';
import { MenuItem } from '../../components/Menu/MenuItem';
import { Tabs } from '../../components/Tabs/Tabs';
import { Switch } from '../../components/Tabs/TabsProps';
import { getMyTasks } from '../../data/selectors/dataSelectors';
import { MainChatDispatchProps,  MainChatStateProps } from './MainChatProps';

const styles: any = require('./MainChat.scss');

class MainChatComponent extends React.Component<MainChatStateProps & MainChatDispatchProps> {

  public state = {
    chatRoom: {
      id: '',
      title: ''
    }
  };

  private getChatTabs = (): Array<Switch> => [
    {
      label: 'General rooms',
      content: 'dupa'
    },
    {
      label: 'Tasks rooms',
      content: this.renderTasksChatRoomsList()
    }
  ]

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
    <Tabs
      menuClassName={ styles.tabsMenu }
      switchClassName={ styles.tabsSwitch }
      activeSwitchClassName={ styles.tabsActiveSwitch }
      items={ this.getChatTabs() }
    />
  )

  private renderTasksChatRoomsList = (): JSX.Element => (
    <Menu vertical={ true } >
      { this.props.myTasks.map((task: any, key: number) => (
        <MenuItem
          key={key }
          label={ `@ ${task.name}` }
          labelClassName={ styles.tasksChatRoomsListLabel }
          linkTo={ `/chat/${task._id}` }
        />
      )) }
    </Menu>
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

const mapStateToProps = (state: any): MainChatStateProps => ({
  me: state.data.me,
  myTasks: getMyTasks(state)
});

export const MainChat = connect<MainChatStateProps, MainChatDispatchProps, any>(
  mapStateToProps,
  null
)(MainChatComponent);
