import React, { useContext } from "react";
import { Alert } from "react-bootstrap";
import AlertContext from "../../Context/Alert/AlertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const {alert} = alertContext
  return alert !== null && <Alert variant={alert.type}>{alert.msg}</Alert>;
};
export default Alerts;
