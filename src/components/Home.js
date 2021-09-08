import React, { Fragment } from "react";
import Users from "./Content/users/Users";
import Alerts from "./Layout/Alerts";
const Home = () => (
  <Fragment>
    <Alerts />
    <Users />
  </Fragment>
);

export default Home;
