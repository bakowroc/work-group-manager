import * as React from 'react';

import { InputEdit } from '../InputEdit/InputEdit';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { ChatProps } from './ChatProps';

const styles: any = require('./Chat.scss');

const exampleChatHistory: Array<any> = [
  {
    author: 'Bakowroc',
    messageContent: 'I think it\'s great to have this',
    postedDate: new Date()
  },
  {
    author: 'Eldie',
    messageContent: 'You sure about this?',
    postedDate: new Date()
  },
  {
    author: 'Bakowroc',
    messageContent: 'I\'m pretty sure, trust me mate',
    postedDate: new Date()
  },
  {
    author: 'Angela',
    messageContent: 'Lol, I hope it works, cause it looks awesome',
    postedDate: new Date()
  },
  {
    author: 'Bakowroc',
    messageContent: 'This is the point honey :)',
    postedDate: new Date()
  },
  {
    author: 'Gregory House',
    messageContent: `I hate that solution. We should focus on data parsers more than
                    creating new shiny components just to make something look better. What about that one we spoke last week?`,
    postedDate: new Date()
  }
];

export class Chat extends React.Component<ChatProps> {

  private onLeave = (data: any) => {
    /*tslint:disable*/console.log(data);/*tslint:enable*/
  }

  private renderChatHistory = (): Array<JSX.Element> =>
    exampleChatHistory.map((messageProps: any, key: number) => (
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
          { this.renderChatHistory() }
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
