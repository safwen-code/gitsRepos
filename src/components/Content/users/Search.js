import React, { Component } from "react";

import { Form, FormControl, Button } from "react-bootstrap";
class Search extends Component {
  state = {
    text: "",
  };

  onchangeHundler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onclickHundler = (e) => {
    e.preventDefault();
    this.props.searchuser(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          name="text"
          value={text}
          onChange={this.onchangeHundler}
        />
        <Button
          onClick={this.onclickHundler}
          variant="outline-success"
          className="ms-3"
        >
          Search Engine
        </Button>
      </Form>
    );
  }
}

export default Search;
