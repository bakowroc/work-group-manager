import * as React from 'react';

import { Button } from '../../../components/Button';
import { Chat } from '../../../components/Chat';
import { InputEdit } from '../../../components/InputEdit';
import { Popup } from '../../../components/Popup';
import { TaskDetailsProps } from './TaskDetailsProps';

const styles: any = require('./TaskDetails.scss');

export class TaskDetails extends React.Component<TaskDetailsProps> {

  private renderTaskDetails = (): JSX.Element => (
    <div className={ styles.taskDetails }>
      <div className={ styles.taskDesc }>
        { this.props.task.description }
      </div>
    </div>
  )

  private renderButtons = (): JSX.Element => (
  <div className={ styles.buttons }>
    <Button
      label="Close"
      onClick={ this.props.onClose }
      flat={ true }
    />
  </div>
  )

  private renderTaskChatroom = (): JSX.Element => (
    <Chat
      title="Chat room"
      chatRoomId = { this.props.task._id }
      historyClassName={ styles.historyChat }
      chatClassName={ styles.taskChatroom }
      titleClassName={ styles.title }
      inputClassName={ styles.messageInputArea}
    />
  )

  private onTitleInputLeave = (): void => {
    // console.log('leave');
  }

  private renderDetailsContent = (): JSX.Element => (
    <div className={ styles.content }>
      <InputEdit
        text={ this.props.task.name }
        useEnterToLeave={ true }
        onLeave={ this.onTitleInputLeave }
        inputClassName={ styles.title }
      />
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
