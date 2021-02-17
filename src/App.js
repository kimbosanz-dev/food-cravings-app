import { createUserProfileDocument, firebaseAuth } from './firebase/firebase.utils';
import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import HeaderComponent from './components/header/header.component';
import ShopPage from './pages/shop-page/shop-page.component';
import HomePage from './pages/homepage/homepage.component';
import NotFoundPage from './pages/404/404.component';
import './App.scss';

class App extends Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(async userAuth => {
    
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth)
      }
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const Dashboard = () => (
      <>
        <HeaderComponent />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </>
    )
    return (
          <Switch>
              <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInSignUpPage />)}/>
              <Route component={Dashboard} />
              <Route exact path='*' component={NotFoundPage}/>
          </Switch>
    );
  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
