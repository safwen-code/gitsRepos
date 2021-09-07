import React from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "../Content/users/SearchBar";
import { LinkContainer } from "react-router-bootstrap";

const Navbars = ({ titel, searchuser, ShowClearBtn, clearUser, setAlert }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{titel}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Features</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>Pricing</Nav.Link>
              </LinkContainer>
            </Nav>
            <SearchBar
              searchuser={searchuser}
              ShowClearBtn={ShowClearBtn}
              clearUser={clearUser}
              setAlert={setAlert}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
Navbar.defaultProps = {
  titel: "githubFinder",
};
Navbars.propTypes = {
  titel: PropTypes.string.isRequired,
  searchuser: PropTypes.func.isRequired,
  ShowClearBtn: PropTypes.bool,
  clearUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Navbars;
