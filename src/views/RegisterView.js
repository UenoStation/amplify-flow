import React, { Component } from 'react';
import Button from '../components/DefaultButton';
import FullScreenContainer from '../components/FullScreenContainer';
import Input from '../components/Input';
import LinkButton from '../components/LinkButton';
import Panel from '../components/Panel';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone_number: ''
        }
    }

    onInputChange = (name, val) => this.setState({ [name]: val })
    onHandleClick = () => this.props.onSubmit(this.state)
    onHandleSignInClick = () => this.props.onToggleSignIn()

    render() {
        return (
            <FullScreenContainer>
                <Panel tall>
                    <label>Username</label>
                    <Input
                        name="username"
                        onInputChange={this.onInputChange}
                    />
                    <label>Password</label>
                    <Input
                        name="password"
                        onInputChange={this.onInputChange}
                        type="password"
                    />
                    <label>Email</label>
                    <Input
                        name="email"
                        placeholder="joe@email.com"
                        onInputChange={this.onInputChange}
                    />
                    <label>Phone</label>
                    <Input
                        name="phone_number"
                        placeholder="+12023334567"
                        onInputChange={this.onInputChange}
                    />
                    <Button onClick={this.onHandleClick}>Submit</Button>
                    <LinkButton onClick={this.onHandleSignInClick}>Sign In</LinkButton>
                    {
                        this.props.userConfirmed &&
                        <h1>You're all set!</h1>
                    }
                </Panel>
            </FullScreenContainer>
        );
    }
}