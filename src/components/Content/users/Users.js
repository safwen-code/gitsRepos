import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import UserItems from "./UserItems";
import { Spinners } from "../../Layout/Spinners";


const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinners />;
  } else {
    return (
      <Container>
        <Row className="mt-5">
          {users.map((el) => {
            return <UserItems user={el} key={el.id} />;
          })}
        </Row>
      </Container>
    );
  }
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Users;
