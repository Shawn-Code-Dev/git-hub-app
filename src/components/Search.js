import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    text: ''
  }

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUserList: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  }

  handleSearch = (e) => this.setState({[e.target.name]: e.target.value})
  
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.text === ''){
      this.props.setAlert('Search field cannot be empty', 'light')
    } else {
      this.props.searchUser(this.state.text)
      this.setState({text:''})
    }
  }

  render() {
    const {showClear, clearUserList} = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" name="text" placeholder="Find a user..." value={this.state.text} onChange={this.handleSearch} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {showClear && (<button className='btn btn-light btn-block' onClick={clearUserList}>Clear</button>)}
      </div>
    )
  }
}

export default Search
