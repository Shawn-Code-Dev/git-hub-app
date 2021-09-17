import React, { useContext, useEffect } from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Repos from './Repos';
import GithubContext from '../context/github/GithubContext';


const UserInfo = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, getUserRepos, loading, repos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login); // eslint-disable-next-line
  }, [])

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gist,
    hireable
  } = user
  
  if(loading) return <Spinner />

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hireable:{' '}
      {hireable ? (<i className='fas fa-check text-success'/>) : (<i className='fas fa-times-circle text-danger' />)}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt="" className='round-img' style={{width:'150px'}} />
          <h1>{name}</h1>
          <p>Location: {location===null ? 'No Location Listed' : location}</p>
        </div>
        <div>
          {bio && (
          <Fragment>
            <h3>Bio:</h3>
            <p>{bio}</p>
          </Fragment>)}
          <a href={html_url} className='btn btn-dark my-1' target='_blank' rel='noreferrer'>Visit Github Profile!</a>
          <ul>
            <li>
              <strong>Username: </strong> {login}
            </li>
            <li>
              {company && (
              <Fragment>
                <strong>Company: </strong> {company}
              </Fragment>)}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>)}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gist ? public_gist : 0}</div>
      </div>

      <Repos repos={repos} />
    </Fragment>
  )
}

UserInfo.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
}

export default UserInfo
