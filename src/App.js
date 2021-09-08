import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GithubState from "./Context/github/GithubState";
import Navbars from "./components/Layout/Navbars";
import Users from "./components/Content/users/Users";
import Alerts from "./components/Layout/Alerts";
import { Container } from "react-bootstrap";
import { About } from "./components/Layout/About";
import User from "./components/Content/users/User";
import PropTypes from "prop-types";

const App = () => {

  //show all githubuser
  // async componentDidMount() {%
  //   try {
  //     this.setState({ loading: true });
  //     const res = await axios.get(
  //       `https://api.github.com/users?client_id =${CLIENT_ID}&client_secret=${SECRET_CLIENT}`
  //     );
  //     console.log("result", res);
  //     this.setState({
  //       users: res.data,
  //     });
  //     this.setState({ loading: false });
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }
  

  return (
    <GithubState>
      <Router>
        <Navbars titel={"github"}  />
        <Container fluid>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Alerts  />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path="/user/:login" component={User} />

            <Route path="/about" component={About} />
          </Switch>
        </Container>
      </Router>
    </GithubState>
  );
};

App.propTypes = {
  setAlert: PropTypes.func,
  alert: PropTypes.object,
};

export default App;
