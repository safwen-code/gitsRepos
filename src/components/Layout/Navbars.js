import React from "react";
import PropTypes from "prop-types";
import { Navbar, Container, Nav } from "react-bootstrap";
import Search from "../Content/users/Search";

const Navbars = ({ titel , searchuser }) => {
   
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" s>
        <Container>
          <Navbar.Brand href="#home">{titel}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            <Search  searchuser={searchuser}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
Navbar.defaultProps = {
  titel: "githubFinder",
  searchuser:PropTypes.func.isRequired,
};
Navbars.propTypes = {
  titel: PropTypes.string.isRequired,
};

export default Navbars;
