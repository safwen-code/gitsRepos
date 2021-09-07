import "./App.css";
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";

import { CLIENT_ID, SECRET_CLIENT } from "./components/Variaval";
import Navbars from "./components/Layout/Navbars";
import Users from "./components/Content/users/Users";
import Alerts from "./components/Layout/Alerts";
import { Container } from "react-bootstrap";
import { About } from "./components/Layout/About";
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

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
  //search for spicifec githuber
  searchuser = async (text) => {
    try {
      this.setState({
        loading: false,
      });
      const res =
        await axios.get(`https://api.github.com/search/users?q=${text}&client_id =${CLIENT_ID}
      &client_secret=${SECRET_CLIENT}`);
      this.setState({
        users: res.data.items,
        loading: true,
      });
      console.log("search user function", text);
    } catch (err) {
      console.error(err.msg);
    }
  };
  //Clear All User
  clearUser = (e) => {
    console.log("clear user");
    this.setState({
      users: [],
      loading: false,
    });
  };
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg,
        type,
      },
    });
    setTimeout(
      () =>
        this.setState({
          alert: null,
        }),
      5000
    );
  };
  render() {
    const { users, loading, alert } = this.state;
    return (
      <Router>
        <Navbars
          titel={"github"}
          searchuser={this.searchuser}
          clearUser={this.clearUser}
          ShowClearBtn={users.length > 0 ? true : false}
          setAlert={this.setAlert}
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
            <Route path="/about" component={About} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
