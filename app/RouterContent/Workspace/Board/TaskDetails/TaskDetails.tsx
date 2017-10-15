import * as React from 'react';

import { Popup } from '../../../../components/Popup/Popup';
import { TaskDetailsProps } from './TaskDetailsProps';
import { Chat } from '../../../../components/Chat/Chat';

const styles: any = require('./TaskDetails.scss');

export class TaskDetails extends React.Component<TaskDetailsProps> {

  private renderTaskDetails = (): JSX.Element => (
    <div className={ styles.taskDetails }>
      <div className={ styles.taskDesc }>
        { this.props.task.desc }
      </div>
    </div>
  )

  private renderButtons = (): JSX.Element => (
   <div className={ styles.buttons }>
     <div onClick={ this.props.onClose }>CLOSE</div>
   </div>
  )

  private renderTaskChatroom = (): JSX.Element => (
    <Chat
      title="Chat room"
      relatedToTask={ this.props.task }
      historyClassName={ styles.historyChat }
      chatClassName={ styles.taskChatroom }
      titleClassName={ styles.title }
      inputClassName={ styles.messageInputArea}
    />
  )

  private renderDetailsContent = (): JSX.Element => (
    <div className={ styles.content }>
      <div className={ styles.title }>
        { this.props.task.title }
      </div>
      <div className={ styles.taskBody }>
        { this.renderTaskDetails() }
        { this.renderTaskChatroom() }
      </div>
      { this.renderButtons() }
    </div>
  )

  public render(): JSX.Element {
    return (
      <Popup
        isOpen={ this.props.isOpen }
        content={ this.renderDetailsContent() }
      />
    );
  }
}