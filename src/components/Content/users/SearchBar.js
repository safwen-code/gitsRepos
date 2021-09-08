import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchBar = ({ setAlert, searchuser, ShowClearBtn, clearUser }) => {
  const [text, settext] = useState("");

  const onchangeHundler = (e) => {
    settext(e.target.value);
  };
  const onsubmitHundler = (e) => {
    e.preventDefault();
    console.log("hello Search");
    if (text === "") {
      setAlert("please give me a name", "danger");
    } else {
      searchuser(text);
      settext("");
    }
  };
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        name="text"
        value={text}
        onChange={onchangeHundler}
      />
      <Button
        variant="outline-success"
        className="ms-3"
        onClick={onsubmitHundler}
      >
        Search Engine
      </Button>
      {ShowClearBtn && (
        <Button variant="outline-danger" className="ms-3" onClick={clearUser}>
          Clear Users
        </Button>
      )}
    </Form>
  );
};
SearchBar.propTypes = {
  setAlert: PropTypes.func.isRequired,
  searchuser: PropTypes.func.isRequired,
  ShowClearBtn: PropTypes.bool,
  clearUser: PropTypes.func.isRequired,
};
export default SearchBar;
