import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavBarComponent } from "../components";

export const MainLayout = ({ children }) => {
  const mainLayoutStyles = {
    backgroundColor: "#1f1b24",
    color: "white",
    height: "100%",
    width: "100%",
  };

  const childrenStyles = {
    width: "100%",
  };
  return (
    <Container style={mainLayoutStyles} fluid>
      <Row fullWidth>
        <NavBarComponent />
      </Row>
      <Row style={childrenStyles}>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};
