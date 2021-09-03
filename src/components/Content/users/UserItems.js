import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const UserItems = ({ user: { login, avatar_url, html_url, id } }) => {
  return (
    <Card style={{ width: "18rem" }} key={id}>
      <Card.Img variant="top" src={avatar_url} className="round-img" />
      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <Card.Link href={html_url}>Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

UserItems.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
