import React from "react";
import { Col, Container, List, ListGroup, ListGroupItemHeading, Row } from "reactstrap";

function Students() {
  return <div style={{ height: "1000px" }}>
    <Container fluid>
      <Row>
        <Col xl="3"></Col>
        <Col xl="6">
          <List>
            <ListGroup>
              <ListGroupItemHeading><h1>Students</h1></ListGroupItemHeading>
              <List>
                <Row>
                  <Col xl={12}>
                    <ul>
                 <li>demo</li>
                 <li>demo</li>
                 <li>demo</li>
                 <li>demo</li>
                 <li>demo</li>
                 <li>demo</li>
                 <li>demo</li>
                 <li>demo</li>
                 </ul>
                  </Col>
                </Row>
              </List>
            </ListGroup>
          </List>
        </Col>
            </Row>
    
    
    </Container>
  </div>;
}

export default Students;
