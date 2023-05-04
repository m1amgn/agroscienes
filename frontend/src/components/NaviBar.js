import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NaviBar.css";

function NaviBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style = {{paddingLeft: "15px"}}>
        <Navbar.Brand>Agroscientist</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Main</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/elementsform">Nutrient calculator</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tankform">Tankmix calculator</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NaviBar;
