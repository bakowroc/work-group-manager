import * as React from 'react';
import Moment from 'react-moment';

import { ChatMessageProps } from './ChatMessageProps';

const styles: any = require('./ChatMessage.scss');

export class ChatMessage extends React.Component<ChatMessageProps> {

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        <div className={ `${styles.author} ${this.props.messageAuthorClassName}` }>
          <div className={ styles.authorAvatar }>
            { this.props.author }
          </div>
          <div className={ styles.authorName }>
            { this.props.author }
          </div>
          <div className={ styles.createdAt }>
            <Moment
              format="hh:mm"
              date={ this.props.createdAt }
            />
          </div>
        </div>
        <p className={ `${styles.message} ${this.props.messageTextClassName}` }>
          { this.props.message }
        </p>
      </div>
    );
  }
}
