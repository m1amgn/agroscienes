import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#212529", color: "#fff" }}>
      <Container style={{ display: "flex", justifyContent: "center", padding: "10px"}}>
        <p>Agroscience</p>
      </Container>
    </Container>
  );
}

export default Footer;
