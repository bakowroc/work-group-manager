import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { Input } from '../components/Form/Input';
import { authenticateAction } from '../utils/axios/requests/AuthActions';
import { LoginDispatchProps } from './LoginProps';

const styles: any = require('./Login.scss');

export class LoginComponent extends React.Component<LoginDispatchProps> {

  private renderBackground = (): JSX.Element => (
    <div className={ styles.background }>
      { Array(270).fill(0, 0).map((chip, key) => {
      const value = Math.random() * 180;

      return (
        <div
          key={ key }
          className={ `${styles.chip} c${Math.round(value)}` }
          style={ {width: value > 20 ? value : 20 + 'px'} }
        />);
      }) }
    </div>
  )

  public render(): JSX.Element {
    return (
      <div className={ styles.container }>
        { this.renderBackground() }
          <div className={ styles.applicationHeader }>
            <div className={ styles.logo }/>
            <div className={ styles.appName }>
              <h1>Work group manager</h1>
              <h3>Keep your stuff together</h3>
            </div>
            <div className={ styles.registerButton }>
              <Button
                label="Make a fresh start"
                flat={ false }
                onClick={ () => location.replace('/register') }
                buttonClassName={ styles.button }
              />
            </div>
          </div>
          <div className={ styles.formContent }>
            <div className={ styles.title }>
              Sign in to your workspace
            </div>
            <Form onSubmit={ this.props.authenticateAction } >
              <Input name="project" label="Project name" />
              <Input type="email" name="email" label="Email address" />
              <Input type="password" name="password" label="Password" />
            </Form>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any): LoginDispatchProps => bindActionCreators({
  authenticateAction
}, dispatch);

export const Login = connect<any, LoginDispatchProps, any>(
  null,
  mapDispatchToProps)
(LoginComponent);
