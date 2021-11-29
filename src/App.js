import './App.css';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About />} />
                  <Route path='/user/:login' element={<UserInfo />}/>
                  <Route element={<NotFound />} />
                </Routes> 
              </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
    );
}

export default App;
