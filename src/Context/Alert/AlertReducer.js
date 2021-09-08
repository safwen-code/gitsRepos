import { ADD_ALERT, REMOVE_ALERT } from "./Types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ALERT:
      return payload
    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};
