import * as moment from 'moment';
import * as React from 'react';

import { ChatMessageProps } from './ChatMessageProps';

const styles: any = require('./ChatMessage.scss');

export class ChatMessage extends React.Component<ChatMessageProps> {

  private renderAuthorDetails = (): JSX.Element => (
      <div className={ styles.authorDetails }>
        <div className={ styles.postedDate }>
          { moment(this.props.createdAt).fromNow() }
        </div>
        <div className={ `${styles.authorName} ${this.props.messageAuthorClassName}` }>
          { this.props.author.username }
        </div>
      </div>
  )

  private renderAuthorAvatar = (): JSX.Element => (
    <div className={ styles.authorAvatar }>
      { this.props.author.username[0] }
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.content }>
        { this.props.author && this.renderAuthorAvatar() }
        <div className={ styles.right }>
          { this.props.author && this.renderAuthorDetails() }
          <p className={ `${styles.message} ${this.props.messageTextClassName}` }>
            { this.props.message }
          </p>
        </div>
      </div>
    );
  }
}
