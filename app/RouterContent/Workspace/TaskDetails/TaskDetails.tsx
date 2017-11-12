import { isEmpty, isUndefined } from 'lodash';
import * as React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../../../components/Button';
import { Chat } from '../../../components/Chat';
import { toggleConfirm } from '../../../components/Confirm/confirm.duck';
import { InputEdit } from '../../../components/InputEdit';
import { Menu } from '../../../components/Menu';
import { MenuItem } from '../../../components/Menu/MenuItem';
import { NameList } from '../../../components/NameList';
import { NameListItem } from '../../../components/NameList/NameListItem';
import { Popup } from '../../../components/Popup';
import { toggleSnackbar } from '../../../components/Snackbar/snackbar.duck';
import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { deleteTaskAction, updateTaskAction } from '../../../utils/axios/requests/TaskActions';
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

  private onTaskDeleteConfirm = () => {
    const deleteTaskBody = {
      slug: this.props.task.slug
    };
    this.props.deleteTaskAction(deleteTaskBody);
    this.props.onClose();
    this.props.toggleSnackbar(SnackbarMessage.TASK_DELETE_SUCCESS);
  }

  private prepareConfirmPayload = (): void => {
    const message = {
      label: 'Task deleting',
      message: 'This action will delete this task permanently',
      onConfirm: this.onTaskDeleteConfirm
    };

    this.props.toggleConfirm(message);
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
        onClick={ this.prepareConfirmPayload }
        flat={ false }
      />
    </div>
  )

  private renderAdditionalInfo = (): JSX.Element => (
    <NameList>
      <NameListItem
        label="Author"
        value={
          !isUndefined(this.props.task.author)
          && this.props.task.author.username
        }
      />
      <NameListItem
        label="Date"
        value={
          <Moment
            format="MM/DD/YYYY"
            date={ this.props.task.createdAt }
          />
        }
      />
      <NameListItem
        label="Priority"
        value={ this.props.task.prior }
      />
    </NameList>
  )

  private renderAssignedUsers = (): JSX.Element => (
    <Menu vertical={ true }>
    { this.props.task.assigned.map((user: any) => (
      <MenuItem
        linkTo={ `/user/${user.slug}` }
        icon="user"
        iconClassName={ styles.assignedUserIcon }
        label={ user.username }
      />)) }
    </Menu>
  )

  private renderTaskDetails = (): JSX.Element => (
    <div className={ styles.taskDetails }>
     <div className={ styles.mainTaskDetails }>
      { !isUndefined(this.props.task.name) && this.renderTaskTitle() }
      { !isUndefined(this.props.task.description) && this.renderTaskDescription() }
     </div>
     <div className={ styles.additionalTaskDetails }>
      { this.renderActionButtons() }
      { this.renderAdditionalInfo() }
      { !isEmpty(this.props.task.assigned) && this.renderAssignedUsers() }
     </div>
    </div>
  )

  private renderTaskChatroom = (): JSX.Element => (
    <Chat
      title="Chat room"
      noDescription={ true }
      messageAuthorClassName={ styles.chatMessageAuthor }
      historyClassName={ styles.historyChat }
      chatClassName={ styles.taskChatroom }
      titleClassName={ styles.chatTitle }
      inputClassName={ styles.messageInputArea }
      default={ this.props.task.chat }
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
        { !isEmpty(this.props.task) && this.renderTaskDetails() }
        { !isUndefined(this.props.task.chat) && this.renderTaskChatroom() }
      </div>
      { this.renderButtons() }
    </div>
  )

  public render(): JSX.Element {
    return (
      <div>
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
  deleteTaskAction,
  toggleConfirm,
  toggleSnackbar
}, dispatch);

export const TaskDetails = connect<any, TaskDetailsDispatchProps, TaskDetailsProps>(
  null,
  mapDispatchToProps
)(TaskDetailsComponent);
