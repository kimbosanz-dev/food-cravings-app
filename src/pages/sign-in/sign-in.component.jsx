import React, { Component } from "react";
import "./sign-in.styles.scss";
import { Link, Redirect, withRouter } from "react-router-dom";
class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };
 
  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "admin" && user_password === "123") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };

  submitForm (e) {
    e.preventDefault()
    this.props.history.push('/home'); // <--- The page you want to redirect your user to.
  }

  render() {
    if (localStorage.getItem("token")) {
        console.log(localStorage);
      return <Redirect to="/home" />;
    }

    // if (localStorage.getItem("token")) {
    //   return <Redirect to="/home" />;
    // }
    
    return (
      <div className="container">
        <form oonSubmit={this.submitForm.bind(this)} className="form-signin">
        {/* <form onSubmit={this.login} className="form-signin"> */}
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div>
            <div className="col">
              <input
                type="text"
                name="user_id"
                onChange={this.handleFormChange}
                placeholder="Enter Username"
              />
              <input
                type="password"
                name="user_password"
                onChange={this.handleFormChange}
                placeholder="Enter Password"
              />
              {/* <input type="submit" value="Login" /> */}
              <button className="input-group-btn">
                <Link to="/home" style={{textDecoration: 'none', color: 'black'}}>Click to login</Link>
              </button>
            </div>
          </div>
          {/* <p>user_id === "admin" && user_password === "123"</p> */}
        </form>
      </div>
    );
  }
}
export default withRouter(SignInComponent);