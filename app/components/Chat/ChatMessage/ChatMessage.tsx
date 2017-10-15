import * as React from 'react';
import Moment from 'react-moment';

import { ChatMessageProps } from './ChatMessageProps';

const styles: any = require('./ChatMessage.scss');

export class ChatMessage extends React.Component<ChatMessageProps> {
  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        <div className={ styles.author }>
          <div className={ styles.authorAvatar }>
            { this.props.author[0] }
          </div>
          <div className={ styles.authorName }>
            { this.props.author }
          </div>
          <div className={ styles.postedDate }>
            <Moment
              format="hh:mm"
              date={ this.props.postedDate }
            />
          </div>
        </div>
        <p className={ styles.message }>
          { this.props.messageContent }
        </p>
      </div>
    );
  }
}
