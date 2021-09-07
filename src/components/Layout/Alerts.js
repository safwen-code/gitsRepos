import React from "react";
import { Alert } from "react-bootstrap";
const Alerts = ({ alert }) => {
  return alert !== null && <Alert variant={alert.type}>{alert.msg}</Alert>;
};
export default Alerts;
