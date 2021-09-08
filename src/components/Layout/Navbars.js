import React from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav } from "react-bootstrap";
import SearchBar from "../Content/users/SearchBar";
import { LinkContainer } from "react-router-bootstrap";

const Navbars = ({ titel}) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{titel}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <SearchBar />
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
};

export default Navbars;
