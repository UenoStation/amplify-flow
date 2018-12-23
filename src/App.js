import React, { Component } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import './App.css';

// views
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';

import awsconfig from './aws-exports';
import VerifyView from './views/VerifyView';
Amplify.configure(awsconfig);


// TODO: Make inputs password types

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showRegister: false,
      showVerify: false
    }
  }

  componentDidMount() {
    if (Auth)
      Auth
        .currentSession()
        .then(user => this.setState({ user: user }))
        .catch(err => console.log(err));
  }

  onLogin = ({ username, password }) => {
    Auth.signIn(username, password)
      .then(user => this.setState({ user }))
      .catch(err => console.log(err));
  }

  onRegister = newuser => {
    const { username, password, email, phone_number } = newuser;

    Auth.signUp({
      username,
      password,
      attributes: {
        email,
        phone_number
      }
    })
      .then(data => {
        console.log(data);
        this.setState(Object.assign({}, { user: false, showRegister: false, showVerify: true }));
      })
      .catch(err => {
        console.log(err);
      })
  }

  onConfirmRegister = vInfo => {
    const { username, code } = vInfo;
    Auth.confirmSignUp(username, code)
      .then(data => {
        console.log(data);
        this.setState(Object.assign({}, { user: false, showRegister: false, showVerify: false }));
      })
      .catch(err => {
        console.log(err);
      });
  }

  signOut = () => {
    Auth.signOut()
      .then(data => {
        console.log(data);
        this.setState(Object.assign({}, { user: false, showRegister: false, showVerify: false }));
      })
      .catch(err => console.log(err));
  }

  toggleRegister = () => {
    this.setState({ showRegister: !this.state.showRegister })
  }

  isHomeView = () => {
    const { showRegister, showVerify, user } = this.state;
    return user && !showRegister && !showVerify;
  }
  isLoginView = () => {
    const { showRegister, showVerify, user } = this.state;
    return !user && !showRegister && !showVerify;
  }
  isRegisterView = () => {
    const { showRegister, user } = this.state;
    return user === null && showRegister;
  }
  isVerifyView = () => {
    return this.state.showVerify;
  }

  render() {
    return (
      <div className="App">
        {this.isLoginView() &&
          <LoginView
            onToggleRegister={this.toggleRegister}
            onSubmit={this.onLogin}
          />
        }
        {this.isRegisterView() &&
          <RegisterView
            onToggleSignIn={this.toggleRegister}
            onSubmit={this.onRegister}
          />
        }
        {
          this.isVerifyView() &&
          <VerifyView onSubmit={this.onConfirmRegister} />
        }
        {this.isHomeView() &&
          <HomeView onHandleSignOut={this.signOut} />
        }
      </div>
    );
  }
}

export default App;