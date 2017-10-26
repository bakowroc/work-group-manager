import { toArray } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Form/Input';
import { Select } from '../../../../components/Form/Select';
import { Popup } from '../../../../components/Popup';
import { addTaskAction } from '../../../../utils/axios/requests/TaskActions';
import { TaskPrior } from '../Task/TaskPrior';
import { AddTaskFormDispatchProps, AddTaskFormProps, AddTaskFormStateProps } from './AddTaskFormProps';

const styles: any = require('./AddTaskForm.scss');

class AddTaskFormComponent extends React.Component<AddTaskFormStateProps & AddTaskFormDispatchProps & AddTaskFormProps> {

  private onAddTaskSubmit = (data: any): void => {
    const toPostTask = {
      board: this.props.board,
      task: {
        ...data,
        author: this.props.me._id,
        assigned: [this.props.me._id],
        board: this.props.board._id,
        slug: new Date().getTime().toString()
      }
    };

    this.props.addTaskAction(toPostTask);
  }

  private onSubmit = (data: any): void => {
    this.onAddTaskSubmit(data);
    this.props.onSubmit();
  }

  private renderForm = (): JSX.Element => (
    <div className={ styles.content }>
      <div className={ styles.formHeader }>Add new task</div>
      <Form onSubmit={ this.onSubmit }>
        <Input name="name" label="Name the task" />
        <Input name="description" label="Describe it" />
        <Select options={ toArray(TaskPrior) } name="prior" label="Set the priority" />
      </Form>
    </div>
  )

  public render(): JSX.Element {
    return (
      <Popup
        isOpen={ this.props.isOpen }
        content={ this.renderForm() }
      />
    );
  }
}

const mapStateToProps = (state: any): AddTaskFormStateProps => ({
  me: state.data.me
});

const mapDispatchToProps = (dispatch: any): AddTaskFormDispatchProps => bindActionCreators({
  addTaskAction
}, dispatch);

export const AddTaskForm = connect<AddTaskFormStateProps, AddTaskFormDispatchProps, AddTaskFormProps>(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskFormComponent);
