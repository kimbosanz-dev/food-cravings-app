import './App.scss';
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import HeaderComponent from './components/header/header.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import { firebaseAuth } from './firebase/firebase.utils';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <Router>
          <HeaderComponent currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/signin' component={SignInSignUpPage} />
            <Route path='/shop' component={ShopPage}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
