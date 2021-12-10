import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/theme/themeContext'

const UserCard = ({user: {login, avatar_url, html_url, repos_url}}) => {
  const themeContext = useContext(ThemeContext)
  const { darkMode } = themeContext

  return (
    <div className='card text-center user-card'>
      <img src={avatar_url} alt='' className='round-img' style={{width:'60px'}} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} btn-sm my-1`}>More Info</Link>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserCard
