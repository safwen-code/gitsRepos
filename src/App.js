import "./App.css";
import Navbars from "./components/Layout/Navbars";
import { Container } from "react-bootstrap";
import Users from "./components/Content/users/Users";
import { Component } from "react";
import axios from "axios";

import { CLIENT_ID, SECRET_CLIENT } from "./components/Variaval";

class App extends Component {
  state = {
    users: [],
    loading: false,
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
  render() {
    const { users, loading } = this.state;
    return (
      <Container fluid>
        <Navbars titel={"github"} searchuser={this.searchuser} />
        <Users users={users} loading={loading} />
      </Container>
    );
  }
}

export default App;
