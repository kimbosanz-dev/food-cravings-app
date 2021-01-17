import React, { Component } from 'react';
import './sign-in.styles.scss';
import { TextField, Button, Avatar } from '@material-ui/core';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignInComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target.value;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="sign-in-container"> 
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField 
              className="field-form"
              label="Email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <TextField 
              className="field-form"
              type="password"
              label="Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="buttons-container">
            <Button 
            variant="contained"
            color="primary"
            style={{backgroundColor: '#ffc43d', color: 'black'}}
            >
              SIGN IN
            </Button>

            <Button 
            variant="contained"
            color="primary"
            style={{backgroundColor: 'whitesmoke', color: 'black'}}
            onClick={signInWithGoogle}
            endIcon={
              <Avatar 
              src="https://i.ibb.co/cDSjsxk/google-logo-icon-png-transparent-background-osteopathy-16.png" 
              style={{ height: '25px', width: '25px'}}/>
            }
            >
              {''}
              SIGN IN WITH GOOGLE
              {''}
            </Button>
          </div>
        </form>

      </div>
    );
  }
}

export default SignInComponent;