import React, { Component } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import './App.css';

// views
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, showRegister: false }
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
        if (data.userConfirmed)
          this.setState({ userConfirmed: data.userConfirmed })
      })
      .catch(err => {
        console.log(err);
      })
  }

  toggleRegister = () => this.setState({ showRegister: !this.state.showRegister })

  isHomeView = () => {
    const { showRegister, user } = this.state;
    return user
  }
  isLoginView = () => {
    const { showRegister, user } = this.state;
    return user === null && showRegister === false;
  }
  isRegisterView = () => {
    const { showRegister, user } = this.state;
    return user === null && showRegister;
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
        {this.isHomeView() && <HomeView />}
        {this.isRegisterView() && <RegisterView />}
      </div>
    );
  }
}

export default App;