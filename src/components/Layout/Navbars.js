import React from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

const Navbars = ({titel}) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">{titel}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="ms-3">
                Search Engine
              </Button>
            </Form>
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
