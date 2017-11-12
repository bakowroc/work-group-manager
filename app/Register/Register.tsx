import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { Input } from '../components/Form/Input';
import { addProjectAction } from '../utils/axios/requests/ProjectActions';
import { addUserAction } from '../utils/axios/requests/UsersActions';
import { RegisterDispatchProps, RegisterStateProps } from './RegisterProps';

const styles: any = require('./Register.scss');

class RegisterComponent extends React.Component<RegisterDispatchProps & RegisterStateProps> {

  private valdiateAndSubmit = (data: any): void => {
    alert(data);
  }

  public render(): JSX.Element {
    return(
      <div className={ styles.container }>
        <div className={ styles.content }>
          <Form onSubmit={ this.valdiateAndSubmit }>
            <Input name="projectName" label="Create your project name" />
            <Input name="email" type="email" label="Choose your email address" />
            <Input name="password" type="password" label="Setup your password" />
            <Input name="passwordConfirm" type="password" label="Confirm your password" />
          </Form>
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
  users: state.data.users,
  projects: state.data.project
});

const mapDispatchToProps = (dispatch: any): RegisterDispatchProps => bindActionCreators({
  addProjectAction,
  addUserAction
}, dispatch);

export const Register = connect<RegisterStateProps, RegisterDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);
