import React, { Component } from 'react';
import DefaultButton from '../components/DefaultButton';
import Input from '../components/Input';
import Panel from '../components/Panel';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    onHandleInputChange = (name, val) => {
        this.setState({ [name]: val });
    }
    render() {
        return (
            <section>
                <Panel>
                    <label>Username</label>
                    <Input
                        name="username"
                        onInputChange={this.onHandleInputChange}
                        placeholder="Enter your username"
                    />
                    <label>Password</label>
                    <Input
                        name="password"
                        onInputChange={this.onHandleInputChange}
                        placeholder="Enter your password"
                    />
                    <DefaultButton>Submit</DefaultButton>
                </Panel>
            </section>
        )
    }
}

export default LoginView