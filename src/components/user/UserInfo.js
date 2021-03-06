import React, { useContext, useEffect } from "react";
import Spinner from "../Spinner";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import Repos from "./Repos";
import GithubContext from "../../context/github/githubContext";
import ThemeContext from "../../context/theme/themeContext";

const UserInfo = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, getUserRepos, loading, repos } = githubContext;

  const themeContext = useContext(ThemeContext);
  const { darkMode } = themeContext;

  const { login } = useParams();

  useEffect(() => {
    getUser(login);
    getUserRepos(login); // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    html_url,
    followers,
    following,
    public_repos,
    public_gist,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link
        to='/'
        className={`btn btn-light ${darkMode ? "btn-light" : "btn-dark"}`}
      >
        Back To Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className={`${darkMode ? "card-dark" : "card-light"} grid-2`}>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location === null ? "No Location Listed" : location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className={`btn ${darkMode ? "btn-light" : "btn-dark"} my-1`}
            target='_blank'
            rel='noreferrer'
          >
            Visit Github Profile!
          </a>
          <ul>
            <li>
              <strong>Username: </strong> {login}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={`${darkMode ? "card-dark" : "card-light"} text-center`}>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public Repos: {public_repos}</div>
        <div className={`badge ${darkMode ? "badge-light" : "badge-dark"}`}>
          Public Gists: {public_gist ? public_gist : 0}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default UserInfo;
