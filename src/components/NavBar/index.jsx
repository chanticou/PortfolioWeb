import React from "react";
import { PortfolioWeb } from "../PortfolioWeb/index.jsx";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./index.css";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/Home">
            <PortfolioWeb />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/yo">
                Yo
              </Nav.Link>
              <Nav.Link as={Link} to="/contact-form">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Perfil
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="content_navBar">
        <div className="content_title">
          <PortfolioWeb />
        </div>

        <ul className="ul_navBar">
          <Link to="/home">
            <li className="li_home">Home</li>
          </Link>

          <Link to="/yo">
            <li className="li_home">Yo</li>
          </Link>

          <Link to="/contact-form">
            <li className="li_home">Contacto</li>
          </Link>
          <Link to="/">
            <li className="li_home">Perfil</li>
          </Link>
        </ul>
        <div className="gradient_black_navBar"></div>
      </div> */}
    </>
  );
};