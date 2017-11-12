import { isEmpty, isUndefined } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Chat } from '../../components/Chat/Chat';
import { Menu } from '../../components/Menu';
import { MenuItem } from '../../components/Menu/MenuItem';
import { Tabs } from '../../components/Tabs/Tabs';
import { Switch } from '../../components/Tabs/TabsProps';
import { ChatState } from '../../data/chat/ChatState';
import { getMyTasks } from '../../data/selectors/dataSelectors';
import { joinChatAction } from '../../utils/socket/socket.duck';
import { MainChatDispatchProps,  MainChatStateProps } from './MainChatProps';

const styles: any = require('./MainChat.scss');

class MainChatComponent extends React.Component<MainChatStateProps & MainChatDispatchProps> {

  private getChatTabs = (): Array<Switch> => [
    {
      label: 'General rooms',
      content: <Menu vertical={ true }>{ this.renderChatRoomsList() }</Menu>
    },
    {
      label: 'Tasks rooms',
      content: <Menu vertical={ true }>{ this.renderTasksChatRoomsList() }</Menu>
    }
  ]

  private onChatRoomChange = (chat: any): void => {
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
      placeholder="Share your thoughts!"
      default={ this.props.chats[0] }
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

  private renderChatRoomLabel = (chat: ChatState, key: number): JSX.Element => (
    <MenuItem
      key={ key }
      labelClassName={ styles.tasksChatRoomsListLabel }
      label={ `@ ${chat.name}` }
      linkTo={ `/chat?${chat._id}`}
      onClick={ () => this.onChatRoomChange(chat) }
    />
  )

  private renderTasksChatRoomsList = (): Array<JSX.Element> =>
    !isEmpty(this.props.myTasks) && this.props.myTasks
      .filter(({chat}) => !isUndefined(chat))
      .map(({chat}, key) => this.renderChatRoomLabel(chat, key))

  private renderChatRoomsList = (): Array<JSX.Element> =>
    !isEmpty(this.props.chats) && this.props.chats
        .filter((chat) => chat.type === 'public')
        .map(this.renderChatRoomLabel)

  public render(): JSX.Element {
    return(
      <div className={ styles.content }>
        <div className={ styles.chatRoom }>
        { !isEmpty(this.props.chats) && this.renderChatRoom() }
      </div>
      <div className={ styles.chatSidebar }>
        { this.renderSidebar() }
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): MainChatStateProps => ({
  myTasks: getMyTasks(state),
  chats: state.data.chats
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  joinChatAction
}, dispatch);

export const MainChat = connect<MainChatStateProps, MainChatDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(MainChatComponent);
