import React, { Component } from 'react';
import Amplify from 'aws-amplify';

import awsconfig from './aws-exports';
import LoginView from './views/LoginView';
Amplify.configure(awsconfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginView />
        </header>
      </div>
    );
  }
}

export default App;
