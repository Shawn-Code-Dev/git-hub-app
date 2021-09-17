import './App.css';

import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import UserList from './components/UserList';
import Search from './components/Search';
import Alert from './components/Alert'
import About from './components/About';
import UserInfo from './components/UserInfo';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon='fab fa-github' title='Github App'/>
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' render={props => (
                    <Fragment>
                      <Search />
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
      </AlertState>
    </GithubState>
    );
}

export default App;
