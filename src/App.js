import "./App.css";
<<<<<<< HEAD
import React, { Fragment } from "react";
=======
import React, { Fragment, useState } from "react";
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GithubState from "./Context/github/GithubState";
import Navbars from "./components/Layout/Navbars";
import Users from "./components/Content/users/Users";
import Alerts from "./components/Layout/Alerts";
import { Container } from "react-bootstrap";
import { About } from "./components/Layout/About";
import User from "./components/Content/users/User";
import PropTypes from "prop-types";
<<<<<<< HEAD

const App = () => {
=======
const App = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState(null);
  const [user, setuser] = useState({});
  const [repos, setrepos] = useState([]);
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1

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
<<<<<<< HEAD
  

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
=======
  //search for spicifec githuber
  const searchuser = async (text) => {
    try {
      setloading(true);

      const res =
        await axios.get(`https://api.github.com/search/users?q=${text}&client_id =${CLIENT_ID}
      &client_secret=${SECRET_CLIENT}`);
      setusers(res.data.items);
      setloading(false);
      console.log("search user function", text);
    } catch (err) {
      console.error(err.msg);
    }
  };
  //Clear All User
  const clearUser = (e) => {
    console.log("clear user");
    setusers([]);
    setloading(false);
  };

  //create alert
  const setAlert = (msg, type) => {
    setalert({ msg, type });
    setTimeout(
      () =>
        this.setState({
          alert: null,
        }),
      5000
    );
  };

  //get singe github user
  const getUser = async (username) => {
    try {
      setloading(true);
      const res =
        await axios.get(`https://api.github.com/users/${username}?client_id =${CLIENT_ID}
      &client_secret=${SECRET_CLIENT}`);
      setuser(res.data);
      setloading(true);
    } catch (err) {
      console.error(err.msg);
    }
  };

  // get the only 5 repos User
  const getRepos = async (username) => {
    
    setloading(true);
    try {
      const res =
        await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id =${CLIENT_ID}
      &client_secret=${SECRET_CLIENT}`);
      setrepos(res.data);
      setloading(false);
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <Router>
      <Navbars
        titel={"github"}
        searchuser={searchuser}
        clearUser={clearUser}
        ShowClearBtn={users.length > 0 ? true : false}
        setAlert={setAlert}
      />
      <Container fluid>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Alerts alert={alert} />
                <Users users={users} loading={loading} />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/user/:login"
            render={(props) => (
              <User
                {...props}
                getUser={getUser}
                user={user}
                loading={loading}
                getRepos={getRepos}
                repos={repos}
              />
            )}
          />

          <Route path="/about" component={About} />
        </Switch>
      </Container>
    </Router>
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1
  );
};

App.propTypes = {
<<<<<<< HEAD
  setAlert: PropTypes.func,
  alert: PropTypes.object,
=======
  user: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  alert: PropTypes.object,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  searchuser: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1
};

export default App;
