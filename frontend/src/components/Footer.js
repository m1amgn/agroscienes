import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "#212529", color: "#fff", flex: "0 0 auto", paddingTop: "10px" }}>
      <Container
        style={{ display: "flex", justifyContent: "center", padding: "5px" }}
      >
        <p>Agroscientist (c), 2023</p>
      </Container>
    </Container>
  );
}

export default Footer;
