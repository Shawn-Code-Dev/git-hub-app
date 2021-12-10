import React, { useContext } from 'react'
import UserCard from './UserCard'
import Spinner from '../Spinner'
import GithubContext from '../../context/github/githubContext'

const UserList = () => {
  const githubContext = useContext(GithubContext)

  const { loading, users } = githubContext

  if(loading){
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserCard key={user.id} user={user}/>
        ))}
      </div>
    )
  } 
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default UserList
