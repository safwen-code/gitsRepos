import React from "react";
import PropTypes from "prop-types";
import RepoItems from "./RepoItems";

const Repos = ({ repos }) => {
  return repos.map((repo, index) => {
    return <RepoItems repo={repo} key={index} />;
  });
};

Repos.propTypes = {
    repos:PropTypes.array,
};

export default Repos;
