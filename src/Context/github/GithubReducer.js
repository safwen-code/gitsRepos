import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
} from "./Type";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        Users: payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        Users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    default:
      return state;
  }
};
