import React from 'react';
import UserCard from './UserCard';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const UserList = ({users, loading}) => {
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

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default UserList
