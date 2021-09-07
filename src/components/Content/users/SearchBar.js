import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
class SearchBar extends Component {
  state = {
    text: "",
  };
  onchangeHundler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onsubmitHundler = (e) => {
    e.preventDefault();
    console.log("hello Search");
    this.props.searchuser(this.state.text);
  };
  render() {
    const { text } = this.state;
    return (
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          name="text"
          value={text}
          onChange={(e) => this.onchangeHundler(e)}
        />
        <Button
          variant="outline-success"
          className="ms-3"
          onClick={(e) => this.onsubmitHundler(e)}
        >
          Search Engine
        </Button>
        {this.props.ShowClearBtn && (
          <Button
            variant="outline-danger"
            className="ms-3"
            onClick={this.props.clearUser}
          >
            Clear Users
          </Button>
        )}
      </Form>
    );
  }
}
export default SearchBar;
