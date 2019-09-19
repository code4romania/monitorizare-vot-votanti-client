import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { LOGIN } from '../App/constants';

const Content = styled.div`
  margin: 0 0 120px;

  p {
    font-size: 16px;
    text-align: center;
    margin: 30px 0 60px;
  }
`;

class Login extends React.PureComponent {
  static propTypes = {
    authenticated: PropTypes.bool,
  };

  state = {
    email: '',
    password: '',
  };

  componentWillMount() {
    if (this.props.authenticated) {
      history.push({ pathname: '/' });
    }
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  getErrors = () => {
    const { error } = this.props;

    if (error && error.errors) {
      return (
        <ul>
          {error.errors.map((e) => <li>{e[0]}</li>)}
        </ul>
      );
    }
    return null;
  };

  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
            <Helmet
              title="Login - Monitorizare Vot"
              meta={[{ name: 'login', content: 'Login' }]}
            />
            <Content>
              <h3>Login</h3>
              <div>
                {this.getErrors()}

                <form>
                  <div className="col-xs-12 col-sm-6">
                    <TextField
                      floatingLabelText="Email"
                      floatingLabelFixed
                      fullWidth
                      required
                      name={'Email'}
                      onChange={this.onEmailChange}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <TextField
                      floatingLabelText="Password"
                      floatingLabelFixed
                      fullWidth
                      required
                      name={'Password'}
                      type="password"
                      onChange={this.onPasswordChange}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <RaisedButton
                      label="Login"
                      secondary
                      className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                      onClick={this.onSubmit}
                    />
                  </div>
                </form>
              </div>
            </Content>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  error: PropTypes.element.isRequired,
  login: PropTypes.element.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) =>
      dispatch({
        type: LOGIN,
        credentials: {
          email,
          password,
        },
      }),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
