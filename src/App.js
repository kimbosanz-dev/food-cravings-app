import './App.scss';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import HeaderComponent from './components/header/header.component';

function App() {
  return (
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </Router>
  );
}

export default App;
