import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(resp.data); 
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  return (
    <Container fluid>
      <Menu />
      <Row className="d-flex flex-wrap mt-5 gap-4 text-center">
        {data.map((item) => (
          <Col key={item.id}>
            <Card style={{ width: "18rem", height: "20rem" }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle>{item.userId}</Card.Subtitle>
                <Card.Title>{item.id}</Card.Title>
                <Card.Text>
                 {item.body}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
