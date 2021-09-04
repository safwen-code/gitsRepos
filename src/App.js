import "./App.css";
import Navbars from "./components/Layout/Navbars";
import { Container } from "react-bootstrap";
import Users from "./components/Content/users/Users";
import { Component } from "react";
import axios from "axios";

import { CLIENT_ID, SECRET_CLIENT } from "./components/Variabal";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get(`https://api.github.com/users?client_id =${CLIENT_ID}&client_secret=${SECRET_CLIENT}`);
      console.log("result", res);
      this.setState({
        users: res.data,
      });
      this.setState({ loading: false });
    } catch (err) {
      console.error(err.message);
    }
  }
  searchuser = (text) =>{
    console.log("search user function" , text)
  }
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
