import React from "react";
import PropTypes from "prop-types";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const RepoItems = ({ repo }) => {
  const { html_url, name, created_at } = repo;

  return (
    <Col className="  mt-4 mb-2 pb-4 pt-3">
      <Link to={html_url}>
        <Button variant="light">{name}</Button>
      </Link>
      <p className="d-flex align-items-center  justify-content-end fst-italic ">
        <Moment format="YYYY/MM/DD">{created_at}</Moment>
      </p>
    </Col>
  );
};

RepoItems.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItems;
