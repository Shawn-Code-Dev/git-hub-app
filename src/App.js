import './App.css';
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import axios from 'axios'
import Search from './components/Search';
import Alert from './components/Alert'
import About from './components/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  searchUser = async text => {
    this.setState({loading:true})
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users:response.data.items, loading:false})
  }

  clearUserList = () => this.setState({users: [], loading:false})

  setAlert = (msg, type) => {
    this.setState({alert:{msg, type}});
    setTimeout(() => {
      this.setState({alert:null})
    }, 2500);
  }

  render(){
    const {users, loading, alert} = this.state;
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
              </Switch> 
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
