import React, { Component } from 'react';

// components
import Button from '../components/DefaultButton';
import FullScreenContainer from '../components/FullScreenContainer';
import Input from '../components/Input';
import Panel from '../components/Panel';

class VerifyView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            code: ''
        }
    }

    onInputChange = (name, val) => {
        this.setState({ [name]: val });
    }

    onHandleClick = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <FullScreenContainer>
                <Panel>
                    <label>Enter username</label>
                    <Input
                        name="username"
                        onInputChange={this.onInputChange}
                    />
                    <label>Enter verification code</label>
                    <Input
                        name="code"
                        onInputChange={this.onInputChange}
                    />
                    <Button onClick={this.onHandleClick}>Submit</Button>
                </Panel>
            </FullScreenContainer>
        )
    }
}

export default VerifyView;