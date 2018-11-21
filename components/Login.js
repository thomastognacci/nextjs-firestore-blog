import React, {Component} from "react";
import styled from "styled-components";
import {auth} from "../lib/firebase";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledLabel = styled.label`
  display: flex;

  span {
    flex: 0 0 25%;
    align-self: center;
  }
`;
const StyledInput = styled.input`
  flex: 1 0 50%;
  padding: 1em;
  margin: 1em;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid grey;
`;

const StyledButton = styled.button`
  border: 1px solid grey;
  cursor: pointer;
  margin-top: 2em;
  padding: 1em;
`;

class Login extends Component {
  state = {
    email: null,
    password: null,
    uid: null,
  };

  handleEmailSignIn = async (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(this.handleAuth)
      .catch(function(error) {
        console.error(`Error Code: ${error.code} | Error Message: ${error.message}`);
      });
  };

  handleSignOut = async () => {
    auth
      .signOut()
      .then(this.setState({uid: null}), this.props.handleAdminSignIn(null))
      .catch(function(error) {
        console.error(`Error Code: ${error.code} | Error Message: ${error.message}`);
      });
  };

  handleAuth = async (user) => {
    if (user) {
      this.setState({uid: user.uid});
      this.props.handleAdminSignIn(user.uid);
    }
  };

  handleChange = (e) => {
    this.setState({[e.target.type]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    this.handleEmailSignIn(email, password);
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) this.handleAuth(user);
    });
  }

  componentWillUnmount() {}

  render() {
    const {uid} = this.state;
    return (
      <>
        {uid ? (
          <>
            <h2>You are signed-in!</h2>
            <StyledButton onClick={this.handleSignOut}>Sign out</StyledButton>
          </>
        ) : (
          <StyledForm onSubmit={this.handleSubmit}>
            <StyledLabel htmlFor="email">
              <span>Email Adress:</span>
              <StyledInput
                onChange={this.handleChange}
                type="email"
                id="email"
                placeholder="email@acme.com"
              />
            </StyledLabel>
            <StyledLabel htmlFor="password">
              <span>Password:</span>
              <StyledInput
                onChange={this.handleChange}
                type="password"
                id="password"
                placeholder="p@s$w0rd"
              />
            </StyledLabel>
            <StyledButton>Sign in!</StyledButton>
          </StyledForm>
        )}
      </>
    );
  }
}

export default Login;
