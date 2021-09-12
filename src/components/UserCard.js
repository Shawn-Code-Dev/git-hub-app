import React from 'react'
import PropTypes from 'prop-types'

const UserCard = ({user: {login, avatar_url, html_url, repos_url}}) => {
    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}} />
        <h3>{login}</h3>
        <div>
          <a href="" className="btn btn-dark btn-sm my-1">More Info</a>
        </div>
      </div>
    );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserCard
