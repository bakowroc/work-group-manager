import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../../../components/Button';
import { Chat } from '../../../components/Chat';
import { Confirm } from '../../../components/Confirm';
import { InputEdit } from '../../../components/InputEdit';
import { NameList } from '../../../components/NameList';
import { NameListItem } from '../../../components/NameList/NameListItem';
import { Popup } from '../../../components/Popup';
import { updateTaskAction } from '../../../utils/axios/requests/TaskActions';
import { TaskDetailsDispatchProps, TaskDetailsProps } from './TaskDetailsProps';
import { toggleConfirm } from '../../../components/Confirm/confirm.duck';

const styles: any = require('./TaskDetails.scss');

export class TaskDetailsComponent  extends React.Component<TaskDetailsDispatchProps & TaskDetailsProps> {

  private onTitleInputLeave = (value: string): void => {
    const updateTaskBody = {
      slug: this.props.task.slug,
      data: {name: value}
    };
    this.props.updateTaskAction(updateTaskBody);
  }

  private onDescriptionInputLeave = (value: string): void => {
    const updateTaskBody = {
      slug: this.props.task.slug,
      data: {description: value}
    };
    this.props.updateTaskAction(updateTaskBody);
  }

  private onTaskDeleteConfirm = () => console.log('confirmed');

  private renderTaskTitle = (): JSX.Element => (
    <InputEdit
      text={ this.props.task.name }
      useEnterToLeave={ true }
      onLeave={ this.onTitleInputLeave }
      inputClassName={ styles.title }
    />
  )

  private renderTaskDescription = (): JSX.Element => (
    <div className={ styles.taskDesc }>
      <InputEdit
        text={ this.props.task.description }
        useEnterToLeave={ true }
        onLeave={ this.onDescriptionInputLeave }
        inputClassName={ styles.description }
      />
    </div>
  )

  private renderActionButtons = (): JSX.Element => (
    <div className={ styles.actionButtons }>
      <Button
        label="Mark as done"
        buttonClassName={ styles.doneButton }
        onClick={ null }
        flat={ false }
      />
      <Button
        label="Delete"
        buttonClassName={ styles.deleteButton }
        onClick={ this.props.toggleConfirm }
        flat={ false }
      />
    </div>
  )

  private renderAdditionalInfo = (): JSX.Element => (
    <NameList>
      <NameListItem
        label="Author"
        value={ this.props.task.author }
      />
      <NameListItem
        label="Date"
        value={ this.props.task.createdAt }
      />
      <NameListItem
        label="Priority"
        value={ this.props.task.prior }
      />
    </NameList>
  )

  private renderTaskDetails = (): JSX.Element => (
    <div className={ styles.taskDetails }>
     <div className={ styles.mainTaskDetails }>
      { this.props.task.name && this.renderTaskTitle() }
      { this.props.task.description && this.renderTaskDescription() }
     </div>
     <div className={ styles.additionalTaskDetails }>
      { this.renderActionButtons() }
      { this.renderAdditionalInfo() }
     </div>
    </div>
  )

  private renderTaskChatroom = (): JSX.Element => (
    <Chat
      title="Chat room"
      chatRoomId={ this.props.task._id }
      historyClassName={ styles.historyChat }
      chatClassName={ styles.taskChatroom }
      titleClassName={ styles.chatTitle }
      inputClassName={ styles.messageInputArea}
    />
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

  private renderDetailsContent = (): JSX.Element => (
    <div className={ styles.content }>
     <div className={ styles.taskBody }>
        { this.renderTaskDetails() }
        { this.renderTaskChatroom() }
      </div>
      { this.renderButtons() }
    </div>
  )

  public render(): JSX.Element {
    return (
      <div>
        <Confirm
          label="Task deleting"
          message="You re going to delete this task"
          onConfirm={ this.onTaskDeleteConfirm }
        />
        <Popup
          isOpen={ this.props.isOpen }
          content={ this.renderDetailsContent() }
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  updateTaskAction,
  toggleConfirm
}, dispatch);

export const TaskDetails = connect<any, TaskDetailsDispatchProps, TaskDetailsProps>(
  null,
  mapDispatchToProps
)(TaskDetailsComponent);
