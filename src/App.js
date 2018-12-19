import React, { Component } from 'react';
import Amplify, { Auth } from 'aws-amplify';

import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends Component {
  componentDidMount() {
    if (Auth)
      Auth
        .currentSession()
        .then(session => console.log(session))
        .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
