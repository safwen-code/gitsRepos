import React from "react";
import { Spinner } from "react-bootstrap";
export const Spinners = () => {
  return (
    <div class="d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
