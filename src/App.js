import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GithubState from "./Context/github/GithubState";
import AlertState from "./Context/Alert/AlertState";

import Navbars from "./components/Layout/Navbars";
import { Container } from "react-bootstrap";
import { About } from "./components/Layout/About";
import User from "./components/Content/users/User";
import Home from "./components/Home";
import NotFound from "./NotFound";
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
      <AlertState>
        <Router>
          <Navbars titel={"github"} />
          <Container fluid>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user/:login" component={User} />
              <Route path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
