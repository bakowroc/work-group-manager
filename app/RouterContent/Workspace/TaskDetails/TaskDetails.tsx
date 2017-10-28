import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../../../components/Button';
import { Chat } from '../../../components/Chat';
import { InputEdit } from '../../../components/InputEdit';
import { NameList } from '../../../components/NameList';
import { NameListItem } from '../../../components/NameList/NameListItem';
import { Popup } from '../../../components/Popup';
import { updateTaskAction } from '../../../utils/axios/requests/TaskActions';
import { TaskDetailsDispatchProps, TaskDetailsProps } from './TaskDetailsProps';

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

  private renderAdditionalInfo = (): JSX.Element => (
    <NameList>
      <NameListItem
        label="Created at"
        value={ this.props.task.createdAt }
      />
      <NameListItem
        label="Author"
        value={ this.props.task.author }
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
        { this.props.task.description && this.renderTaskDescription() }
     </div>
     <div className={ styles.additionalTaskDetails }>
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
      titleClassName={ styles.title }
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
      { this.props.task.name && this.renderTaskTitle() }
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

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  updateTaskAction
}, dispatch);

export const TaskDetails = connect<any, TaskDetailsDispatchProps, TaskDetailsProps>(
  null,
  mapDispatchToProps
)(TaskDetailsComponent);
