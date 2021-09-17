import './App.css';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert'
import About from './components/About';
import UserInfo from './components/UserInfo';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar icon='fab fa-github' title='Gitbook App'/>
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={UserInfo}/>
                  <Route component={NotFound} />
                </Switch> 
              </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
    );
}

export default App;
