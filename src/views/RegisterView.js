import React, { Component } from 'react';
import Button from '../components/DefaultButton';
import FullScreenContainer from '../components/FullScreenContainer';
import Input from '../components/Input';
import Panel from '../components/Panel';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    onInputChange = (name, val) => this.setState({ [name]: val })
    onHandleClick = () => this.props.onSubmit(this.state)

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
                    />
                    <label>Email</label>
                    <Input
                        name="email"
                        onInputChange={this.onInputChange}
                    />
                    <label>Phone</label>
                    <Input
                        name="phone_number"
                        onInputChange={this.onInputChange}
                    />
                    <Button onClick={this.onHandleClick}>Submit</Button>
                    {
                        this.props.userConfirmed &&
                        <h1>You're all set!</h1>
                    }
                </Panel>
            </FullScreenContainer>
        );
    }
}