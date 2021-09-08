import React, { useContext } from "react";

import { Container, Row } from "react-bootstrap";
import UserItems from "./UserItems";
import GithubContext from "../../../Context/github/GithubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, Users } = githubContext;
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

export default Users;
