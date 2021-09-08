import React, { useReducer } from "react";
import { ADD_ALERT, REMOVE_ALERT } from "./Types";
import AlertReducer from "./AlertReducer";
import AlertContext from "./AlertContext";
const AlertState = (props) => {
  const initialState = null
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //SET ALERT FUNCTION
  const setAlert = (msg, type) => {
    dispatch({ type: ADD_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
