import React, { useState, useContext } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import GithubContext from "../../../Context/github/GithubContext";
import AlertContext from "../../../Context/Alert/AlertContext";
const SearchBar = () => {
  // use the context
  let githubContext = useContext(GithubContext);
  let alertContext = useContext(AlertContext);

  const [text, settext] = useState("");

  const onchangeHundler = (e) => {
    settext(e.target.value);
  };
  const onsubmitHundler = (e) => {
    console.log("hello Search");
    if (text === "") {
      alertContext.setAlert("please give me a name", "danger");
    } else {
      githubContext.searchuser(text);
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
      {githubContext.Users.length > 0 && (
        <Button
          variant="outline-danger"
          className="ms-3"
          onClick={githubContext.clearUser}
        >
          Clear Users
        </Button>
      )}
    </Form>
  );
};
export default SearchBar;
