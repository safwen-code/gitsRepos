<<<<<<< HEAD
import React, { useState, useContext } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import GithubContext from "../../../Context/github/GithubContext";
import AlertContext from "../../../Context/Alert/AlertContext";
const SearchBar = () => {
  // use the context
  let githubContext = useContext(GithubContext);
  let alertContext = useContext(AlertContext);
=======
import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchBar = ({ setAlert, searchuser, ShowClearBtn, clearUser }) => {
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1
  const [text, settext] = useState("");

  const onchangeHundler = (e) => {
    settext(e.target.value);
  };
  const onsubmitHundler = (e) => {
<<<<<<< HEAD
    console.log("hello Search");
    if (text === "") {
      alertContext.setAlert("please give me a name", "danger");
    } else {
      githubContext.searchuser(text);
=======
    e.preventDefault();
    console.log("hello Search");
    if (text === "") {
      setAlert("please give me a name", "danger");
    } else {
      searchuser(text);
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1
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
<<<<<<< HEAD
      {githubContext.Users.length > 0 && (
        <Button
          variant="outline-danger"
          className="ms-3"
          onClick={githubContext.clearUser}
        >
=======
      {ShowClearBtn && (
        <Button variant="outline-danger" className="ms-3" onClick={clearUser}>
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1
          Clear Users
        </Button>
      )}
    </Form>
  );
};
<<<<<<< HEAD
SearchBar.propTypes = {};
=======
SearchBar.propTypes = {
  setAlert: PropTypes.func.isRequired,
  searchuser: PropTypes.func.isRequired,
  ShowClearBtn: PropTypes.bool,
  clearUser: PropTypes.func.isRequired,
};
>>>>>>> 17e5bacd4b1ce49450a0f04b089ea5f1feff89b1
export default SearchBar;
