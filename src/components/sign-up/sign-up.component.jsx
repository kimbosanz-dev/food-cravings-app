import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import { createUserProfileDocument, firebaseAuth } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';


export default class SignUpComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Password does not match!');
            return;
        }

        try {

            const { user } = await firebaseAuth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up-container">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <div>
                    <TextField
                    className="field-form"
                    label="Display Name"
                    name="displayName"
                    onChange={this.handleChange}
                    value={displayName}
                    />
                </div>
                <div>
                    <TextField 
                    className="field-form"
                    label="Email"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={email}
                    />
                </div>
                <div>
                    <TextField 
                    className="field-form"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={password}
                    />
                </div>
                <div>
                    <TextField 
                    className="field-form"
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleChange}
                    value={confirmPassword}
                    />
                </div>

                <Button 
                type="submit"
                variant="contained"
                color="primary"
                style={{backgroundColor: '#ffc43d', color: 'black'}}
                >
                SIGN UP
                </Button>                
            </form>
            </div>
        )
    }
}
