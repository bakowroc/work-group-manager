import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { Input } from '../components/Form/Input';
import { addUserAction } from '../utils/axios/requests/UsersActions';
import { ErrorMessage } from './ErrorMessage';
import { RegisterDispatchProps, RegisterStateProps } from './RegisterProps';
import { validate } from './validators';

const styles: any = require('./Register.scss');

class RegisterComponent extends React.Component<RegisterDispatchProps & RegisterStateProps> {

  public state = {
    noValidInfo: '',
    isValid: false
  };

  private renderErrorMessage = (): JSX.Element => (
    <div className={ styles.errorMessage }>
      { this.state.noValidInfo }
    </div>
  )

  private submitRegisterForm = (data: any) => {
    if (
      validate.isNotEmpty(data.projectName)
      && validate.isUniq(data.projectName, 'name', this.props.projects)
      && validate.isNotEmpty(data.email)
      && validate.isUniq(data.email, 'email', this.props.users)
      && validate.isNotEmpty(data.password)
      && validate.isNotEmpty(data.passwordConfirm)
      && data.password === data.passwordConfirm
    ) {
      this.props.addUserAction({
        user: {
          email: data.email,
          username: data.email,
          slug: data.email.split('@')[0],
          password: data.password
        },
        project: {
          name: data.projectName
        }
      });
      this.setState({isValid: true});
      setTimeout(() => location.replace('/'), 2000);
    } else {
      this.setState({
        isValid: false,
        noValidInfo: ErrorMessage.IS_EMPTY_AND_UNVALID
      });
    }
  }

  private renderForm = (): JSX.Element => (
    <Form onSubmit={ this.submitRegisterForm }>
      { !this.state.isValid && this.renderErrorMessage() }
        <Input
          name="projectName"
          label="Create your project name"
        />
        <Input
          name="email"
          type="email"
          label="Choose your email address"
        />
        <Input
          name="password"
          type="password"
          label="Setup your password"
        />
        <Input
          name="passwordConfirm"
          type="password"
          label="Confirm your password"
        />
    </Form>
  )

  private renderSuccess = (): JSX.Element => (
    <div className={ styles.success }>
      Everything went great!
      Now you're gonna be redirect to the login page.
    </div>
  )

  public render(): JSX.Element {
    return(
      <div className={ styles.container }>
        <div className={ styles.content }>
          { !this.state.isValid
            ? this.renderForm()
            : this.renderSuccess()
          }
        </div>
        <Button
          label="Back to login page"
          onClick={ () => location.replace('/') }
          flat={ true }
          buttonClassName={ styles.backToLoginButton }
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any): RegisterStateProps => ({
  users: state.users.data,
  projects: state.projects.data
});

const mapDispatchToProps = (dispatch: any): RegisterDispatchProps => bindActionCreators({
  addUserAction
}, dispatch);

export const Register = connect<RegisterStateProps, RegisterDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);
