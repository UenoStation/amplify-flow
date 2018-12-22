import React, { Component } from 'react';

// components
import DefaultButton from '../components/DefaultButton';
import FullScreenContainer from '../components/FullScreenContainer';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import LinkButton from '../components/LinkButton';
import Panel from '../components/Panel';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onHandleClick = () => this.props.onSubmit(this.state);
    onHandleInputChange = (name, val) => this.setState({ [name]: val })
    onHandleRegisterClick = () => this.props.onToggleRegister()

    render() {
        return (
            <FullScreenContainer>
                <Panel>
                    <InputLabel>Username</InputLabel>
                    <Input
                        name="username"
                        onInputChange={this.onHandleInputChange}
                        placeholder="Enter your username"
                    />
                    <InputLabel>Password</InputLabel>
                    <Input
                        name="password"
                        onInputChange={this.onHandleInputChange}
                        placeholder="Enter your password"
                    />
                    <DefaultButton onClick={this.onHandleClick}>Submit</DefaultButton>
                    <LinkButton onClick={this.onHandleRegisterClick}>Register</LinkButton>
                </Panel>
            </FullScreenContainer>
        )
    }
}

export default LoginView