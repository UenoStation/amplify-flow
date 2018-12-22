import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultButton from '../components/DefaultButton';
import Input from '../components/Input';
import InputLabel from '../components/InputLabel';
import Panel from '../components/Panel';

const Container = styled.section`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
justify-content: center;
`;

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onHandleInputChange = (name, val) => this.setState({ [name]: val })
    onHandleClick = () => this.props.onSubmit(this.state);

    render() {
        return (
            <Container>
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
                </Panel>
            </Container>
        )
    }
}

export default LoginView