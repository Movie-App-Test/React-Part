import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
const Movie = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div className="sidenav">
        <Link to="/">Home</Link>
      </div>
      <div className="main">
        <Container>
          <iframe
            src={location.state.videolink.linktovideo}
            title="description"
          ></iframe>
        </Container>
      </div>
    </div>
  );
};

export default Movie;
