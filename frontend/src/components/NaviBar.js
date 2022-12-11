import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NaviBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style = {{"padding-left": "15px"}}>
        <Navbar.Brand>Agroscienes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/elementsform">ElementsForm</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tankform">TankForm</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NaviBar;
