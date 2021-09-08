import React, { useContext, useEffect } from "react";

import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";
import { FaRoute } from "react-icons/fa";
import { Link } from "react-router-dom";
import Repos from "./Repos";

import GithubContext from "../../../Context/github/GithubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { loading, user, getUser, repos, getRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
  }, [getUser, getRepos, match.params.login]);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    company,
    hireable,
  } = user;
  return (
    <Container>
      <Row className=" mt-4 ">
        <Col className="d-flex mt-3  mb-4">
          <Button variant="outline-secondary"> go to search page</Button>
          {"  "}
          <h6 className="d-flex align-items-center ms-3 pt-2">
            hearibale :{"  "}
            {hireable ? <FcApproval /> : ""}
          </h6>
        </Col>
      </Row>
      <Row className=" mt-4  pb-3 mb-4">
        <Col className=" me-3 mt-2 d-flex justify-content-center">
          <Card style={{ width: "9rem" }}>
            <Card.Img variant="top" src={avatar_url} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Location :{"  "} <FaRoute />
                {location}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className=" mt-2 ">
          <h6 className="mt-2 fst-italic ">Bio</h6>
          <p className="">{bio}</p>
          <Link to={html_url}>
            <Button variant="outline-dark" className="mb-3">
              Visit Profile github
            </Button>
          </Link>
          <h6 className="mt-2 fst-italic">UserName : {login}</h6>
          <h6 className="">Company : {company}</h6>
          <h6 className="">Blog : {blog}</h6>
        </Col>
      </Row>
      <Row className="  pt-4 pb-4 ">
        <Col className="d-flex justify-content-center">
          <Badge bg="primary" className="me-1">
            followers :{followers}
          </Badge>
          {"   "}
          <Badge bg="danger" className="me-1">
            following :{following}
          </Badge>
          {"  "}
          <Badge bg="dark" className="me-1">
            public_repos :{public_repos}
          </Badge>
          {"   "}
          <Badge bg="success">public_gists :{public_gists}</Badge>
        </Col>
      </Row>
      <Row className=" mt-3  d-flex flex-column">
        <Repos repos={repos} />
      </Row>
    </Container>
  );
};

export default User;
