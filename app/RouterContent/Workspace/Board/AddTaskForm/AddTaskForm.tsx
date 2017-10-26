import { toArray } from 'lodash';
import * as React from 'react';

import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Form/Input';
import { Select } from '../../../../components/Form/Select';
import { Popup } from '../../../../components/Popup';
import { TaskPrior } from '../Task/TaskPrior';
import { AddTaskFormProps } from './AddTaskFormProps';

const styles: any = require('./AddTaskForm.scss');

export class AddTaskForm extends React.Component<AddTaskFormProps> {

  private renderForm = (): JSX.Element => (
    <div className={ styles.content }>
      <div className={ styles.formHeader }>Add new task</div>
      <Form onSubmit={ this.props.onSubmit }>
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