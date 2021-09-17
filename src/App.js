import './App.css';
import React, { useState, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import axios from 'axios'
import Search from './components/Search';
import Alert from './components/Alert'
import About from './components/About';
import UserInfo from './components/UserInfo';

import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);


  

  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar icon='fab fa-github' title='Github App'/>
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search setAlert={showAlert}/>
                    <UserList />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' render={props => (
                  <UserInfo {...props} />
                )} />
              </Switch> 
            </div>
        </div>
      </Router>
    </GithubState>
    );
}

export default App;
