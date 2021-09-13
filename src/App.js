import './App.css';
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import axios from 'axios'
import Search from './components/Search';
import Alert from './components/Alert'
import About from './components/About';
import UserInfo from './components/UserInfo';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }

  searchUser = async text => {
    this.setState({loading:true})
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users:response.data.items, loading:false})
  }

  getUser = async (login) => {
    this.setState({loading:true})
    const response = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user:response.data, loading:false})
  }

  getUserRepos = async (login) => {
    this.setState({loading:true})
    const response = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos:response.data, loading:false})
  }

  clearUserList = () => this.setState({users: [], loading:false})

  setAlert = (msg, type) => {
    this.setState({alert:{msg, type}});
    setTimeout(() => {
      this.setState({alert:null})
    }, 2500);
  }

  render(){
    const {users, loading, alert, user, repos} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar icon='fab fa-github' title='Github App'/>
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search searchUser={this.searchUser} clearUserList={this.clearUserList} showClear={users.length > 0 ? true : false} setAlert={this.setAlert}/>
                    <UserList loading={loading} users={users} />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' render={props => (
                  <UserInfo {...props} getUser={this.getUser} user={user} getUserRepos={this.getUserRepos} repos={repos} loading={loading} />
                )} />
              </Switch> 
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
