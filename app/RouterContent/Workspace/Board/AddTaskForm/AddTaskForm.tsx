import * as React from 'react';

import { Form } from '../../../../components/Form/Form';
import { Popup } from '../../../../components/Popup/Popup';
import { AddTaskFormProps, AddTaskFormStateProps, AddTaskFormDispatchProps } from './AddTaskFormProps';
import { Input } from '../../../../components/Form/Input/Input';
import { addTaskAction } from '../../../../utils/axios/requests/TaskActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const styles: any = require('./AddTaskForm.scss');

export class AddTaskFormComponent extends React.Component<AddTaskFormStateProps & AddTaskFormDispatchProps & AddTaskFormProps> {

  private renderForm = (): JSX.Element => (
    <div className={ styles.content }>
      <Form onSubmit={ this.onFormSubmit }>
        <Input name="name" label="Name the task" />
        <Input name="description" label="Describe it" />
        <Input name="prior" label="Prior" />
      </Form>
    </div>
  )

  private onFormSubmit = (data: any): void => {
    const toPostTask = {
      board: this.props.board,
      task: {
        ...data,
        author: this.props.me._id,
        assigned: [this.props.me._id],
        board: this.props.board._id
      }
    };
    
    console.log(toPostTask);
    this.props.addTaskAction(toPostTask);
  }

  public render(): JSX.Element {
    return (
      <Popup
        isOpen={ this.props.isOpen }
        content={ this.renderForm() }
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  me: state.data.me
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  addTaskAction
}, dispatch);

export const AddTaskForm = connect<AddTaskFormStateProps, AddTaskFormDispatchProps, AddTaskFormProps>(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskFormComponent);
