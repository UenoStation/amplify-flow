import React, { Component } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import './App.css';

// views
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null }
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

  render() {
    return (
      <div className="App">
        {(this.state.user) ? <HomeView /> : <LoginView onSubmit={this.onLogin} />}
      </div>
    );
  }
}

export default App;