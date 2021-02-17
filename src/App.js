import './App.scss';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import HeaderComponent from './components/header/header.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up.component';
import { createUserProfileDocument, firebaseAuth } from './firebase/firebase.utils';
import NotFoundPage from './pages/404/404.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = firebaseAuth.onAuthStateChanged(async userAuth => {
    
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const Dashboard = () => (
      <>
        <HeaderComponent currentUser={this.state.currentUser} />
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </>
    )
    return (
          <Switch>
              <Route exact path='/signin' component={SignInSignUpPage} />
              <Route component={Dashboard} />
              <Route exact path='*' component={NotFoundPage}/>
          </Switch>
    );
  }
}

export default App;
