import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
} from "./Type";
let githubClientID;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientID = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_SECRET_CLIENT;
} else {
  githubClientID = process.env.CLIENT_ID;
  githubClientSecret = process.env.SECRET_CLIENT;
}

const GithubState = (props) => {
  const initialState = {
    Users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // setLoading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //serachUser
  const searchuser = async (text) => {
    try {
      setLoading(true);
      const res =
        await axios.get(`https://api.github.com/search/users?q=${text}&client_id =${githubClientID}
      &client_secret=${githubClientSecret}`);
      dispatch({ type: SEARCH_USERS, payload: res.data.items });
      console.log("search user function", text);
    } catch (err) {
      console.error(err.msg);
    }
  };
  //getUser
  //get singe github user
  const getUser = async (username) => {
    try {
      setLoading();
      const res =
        await axios.get(`https://api.github.com/users/${username}?client_id =${githubClientID}
      &client_secret=${githubClientSecret}`);
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      console.error(err.msg);
    }
  };
  //getrepos
  const getRepos = async (username) => {
    setLoading();
    try {
      const res =
        await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id =${githubClientID}
      &client_secret=${githubClientSecret}`);
      dispatch({ type: GET_REPOS, payload: res.data });
    } catch (err) {
      console.error(err.msg);
    }
  };
  //clearUser
  const clearUser = (e) => {
    console.log("clear user");
    dispatch({ type: CLEAR_USERS });
  };

  //return the ProviderContext
  return (
    <GithubContext.Provider
      value={{
        Users: state.Users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        setLoading,
        searchuser,
        clearUser,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
