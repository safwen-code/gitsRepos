import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import UserItems from "./UserItems";

const Users = () => {
  const [Users, setUsers] = useState([
    {
      id: "1",
      login: "mojombo",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    },
    {
      id: "1",
      login: "mojombo",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    },
    {
      id: "1",
      login: "mojombo",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    },
  ]);
  return (
    <Container>
      <Row className="mt-5">
        {Users.map((el) => {
          return <UserItems user={el} key={el.id} />;
        })}
      </Row>
    </Container>
  );
};

Users.prototype = {
  Users: PropTypes.array.isRequired,
};
export default Users;
