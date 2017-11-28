import { isUndefined } from 'lodash';
import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { socketMiddleware } from '../../middleware/socket';
import { joinChatAction, sendChatMessageAction } from '../../utils/socket/socket.duck';
import { InputEdit } from '../InputEdit/InputEdit';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { ChatDispatchProps, ChatProps, ChatStateProps } from './ChatProps';

const styles: any = require('./Chat.scss');

export class ChatComponent extends React.Component<ChatStateProps & ChatProps & ChatDispatchProps> {

  public state: any = {
    id: location.search.split('?')[1],
    title: '',
    description: '',
    history: []
  };

  private watchChatActivity = (): void => {
    socketMiddleware.watch('returnChatMessages', (data: any) => {
      this.setState((prev: any) => ({
        ...prev,
        title: data.name || prev.title,
        description: data.description || prev.description,
        history: data.name === prev.name ? [...prev.history, ...data.messages] : [...data.messages]
      }));
    });
  }

  public componentDidMount() {
    this.watchChatActivity();

    if (this.state.id) {
      this.props.joinChatAction(this.state.id);
    } else {
      this.props.joinChatAction(this.props.default._id);
    }
  }

  private onInputLeave = (data: any) => {
    const message = {
      author: this.props.me._id,
      message: data,
      chat: this.state.id || this.props.default._id
    };

    this.props.sendChatMessageAction(message);
  }

  private renderChatHistory = (): Array<JSX.Element> =>
    this.state.history
      .sort((a: any, b: any) => moment.utc(a.createdAt.timeStamp).diff(moment.utc(b.timeStamp)))
      .reverse()
      .filter((message: any) => !isUndefined(message._id))
      .map((messageProps: any, key: number) => (
        <ChatMessage
          key={ key }
          messageAuthorClassName={ this.props.messageAuthorClassName }
          messageTextClassName={ this.props.messageTextClassName }
          { ...messageProps }
        />
    ))

  public render(): JSX.Element {
    return(
      <div className={ `${styles.content} ${this.props.chatClassName}`  }>
        <div className={ `${styles.title} ${this.props.titleClassName}` }>
          { this.props.title || this.state.title }
        </div>
        <div className={ styles.chatDescription }>
          { !this.props.noDescription && this.state.description || '' }
        </div>
        <div id="historyChat" className={ `${styles.history} ${this.props.historyClassName}` }>
          { this.renderChatHistory() }
        </div>
        <InputEdit
          inputClassName={ `${styles.input} ${this.props.inputClassName}` }
          useEnterToLeave={ true }
          blockOutClickLeave={ true }
          placeholder={ this.props.placeholder || '' }
          onLeave={ this.onInputLeave }
          eraseOnLeave={ true }
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  me: state.users.me
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  sendChatMessageAction,
  joinChatAction
}, dispatch);

export const Chat = connect<ChatStateProps , ChatDispatchProps, ChatProps>(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponent);
