import React from "react";
import PropTypes from "prop-types";
import { Card ,Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserItems = ({ user: { login, avatar_url, html_url, id } }) => {
  return (
    <Card style={{ width: "18rem" }} key={id}>
      <Card.Img variant="top" src={avatar_url} className="round-img" />
      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <LinkContainer to={`user/${login}`}>
          <Button className="d-flex justify-content-center mt-5">More</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

UserItems.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
