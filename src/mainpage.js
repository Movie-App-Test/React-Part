import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function chunkArray(myArray, chunk_size) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      let response = await fetch("http://localhost:3000/");
      let mydata = await response.json();

      var result = chunkArray(mydata, 4);
      setData(result);
    })();
  }, [setData]);

  return (
    <div>
      <div className="sidenav">
        <Link to="/">Home</Link>
      </div>
      {data.length === 0 ? (
        "Loading..."
      ) : (
        <div className="main">
          <Container>
            {data.map((value, index) => {
              return (
                <Row>
                  {value.map((value, index) => {
                    return (
                      <Col>
                        <Card style={{ width: "15rem" }}>
                          <Card.Img variant="top" src={value.image} />
                          <Card.Body>
                            <Card.Title>{value.name}</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Link
                              to={{
                                pathname: value._id,
                                state: { videolink: value },
                              }}
                            >
                              <Button variant="primary">Click to Watch</Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              );
            })}
          </Container>
        </div>
      )}
    </div>
  );
}

export default Home;
