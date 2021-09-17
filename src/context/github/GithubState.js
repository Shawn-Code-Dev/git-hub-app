import React, { useReducer } from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import{
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from '../types'

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const clearUserList = () => dispatch({ type: CLEAR_USERS })

  const searchUser = async text => {
    setLoading();
    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    dispatch({ type:SEARCH_USERS, payload:response.data.items})
  }

  const getUser = async (login) => {
    setLoading();
    const response = await axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    dispatch({ type:GET_USER, payload:response.data })
  }

  const getUserRepos = async (login) => {
    setLoading();
    const response = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    dispatch({ type:GET_REPOS, payload:response.data });
  }

  return (<GithubContext.Provider value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    searchUser,
    getUser,
    clearUserList,
    getUserRepos
  }}>
    {props.children}
  </GithubContext.Provider>)
}

export default GithubState;