import * as React from 'react';

import { InputEdit } from '../InputEdit/InputEdit';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { ChatProps } from './ChatProps';

const styles: any = require('./Chat.scss');

export class Chat extends React.Component<ChatProps> {

  private onLeave = (data: any) => {
    this.props.onMessageSent(data);
  }

  private renderChatHistory = (): Array<JSX.Element> =>
    this.props.data.map((messageProps: any, key: number) => (
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
        <div className={ `${styles.title} ${this.props.titleClassName}` }>{ this.props.title }</div>
        <div className={ `${styles.history} ${this.props.historyClassName}` }>
          { this.props.data && this.renderChatHistory() }
        </div>
        <InputEdit
          text={ 'Message goes here'}
          inputClassName={ `${styles.input} ${this.props.inputClassName}` }
          useEnterToLeave={ true }
          blockOutClickLeave={ true }
          placeholder={ this.props.placeholder || '' }
          onLeave={ this.onLeave }
        />
      </div>
    );
  }
}
