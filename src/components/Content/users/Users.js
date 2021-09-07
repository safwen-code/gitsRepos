import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import UserItems from "./UserItems";

const Users = ({ users }) => {
  return (
    <Container>
      <Row className="mt-5">
        {users.map((el) => {
          return <UserItems user={el} key={el.id} />;
        })}
      </Row>
    </Container>
  );
};

Users.prototype = {
  users: PropTypes.array.isRequired,
};
export default Users;
