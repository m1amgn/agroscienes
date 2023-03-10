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
              <Link to="/">Главная</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/elementsform">Калькулятор удобрений</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tankform">Калькулятор баковых смесей</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NaviBar;
