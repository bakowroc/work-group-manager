import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form } from '../../../components/Form';
import { Input } from '../../../components/Form/Input';
import { Popup } from '../../../components/Popup';
import { toggleSnackbar } from '../../../components/Snackbar/snackbar.duck';
import { SnackbarMessage } from '../../../components/Snackbar/SnackbarProps';
import { addBoardAction } from '../../../utils/axios/requests/BoardActions';
import { AddBoardFormDispatchProps, AddBoardFormProps, AddBoardFormStateProps } from './AddBoardFormProps';

const styles: any = require('./AddBoardForm.scss');

class AddBoardFormComponent extends React.Component<AddBoardFormStateProps & AddBoardFormDispatchProps & AddBoardFormProps> {

  public state = {
    isCheckboxChecked: false
  };

  private onAddBoardSubmit = (data: any): void => {
    const icon = data.icon.length > 0 ? data.icon : 'check';
    const toPostBoard = {
      name: data.name,
      icon,
      slug: Math.random() * Math.random() * Math.random() + new Date().getSeconds(),
      project: this.props.project
    };

    this.props.addBoardAction(toPostBoard);
    this.props.toggleSnackbar(SnackbarMessage.BOARD_ADDED_SUCCESS);
  }

  private onSubmit = (data: any): void => {
    this.onAddBoardSubmit(data);
    this.props.onSubmit();
  }

  private renderForm = (): JSX.Element => (
    <div className={ styles.content }>
      <div className={ styles.formHeader }>Add new board</div>
      <Form onSubmit={ this.onSubmit }>
        <Input name="name" label="Name the board" />
        <Input name="icon" label="Enter FA icon name" />
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

const mapStateToProps = (state: any): AddBoardFormStateProps => ({
  project: state.projects.self
});

const mapDispatchToProps = (dispatch: any): AddBoardFormDispatchProps => bindActionCreators({
  addBoardAction,
  toggleSnackbar
}, dispatch);

export const AddBoardForm = connect<AddBoardFormStateProps, AddBoardFormDispatchProps, AddBoardFormProps>(
  mapStateToProps,
  mapDispatchToProps
)(AddBoardFormComponent);
