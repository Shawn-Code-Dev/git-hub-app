import React, { useContext, useState } from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext);
  const {users, clearUserList} = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('')

  const handleSearch = (e) => setText(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text === ''){
      setAlert('Search field cannot be empty', 'light')
    } else {
      githubContext.searchUser(text)
      setText('')
    }
  }

    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Find a user..." value={text} onChange={handleSearch} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {users.length > 0 && (<button className='btn btn-light btn-block' onClick={clearUserList}>Clear</button>)}
      </div>
    )
}

export default Search
