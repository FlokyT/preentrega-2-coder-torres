import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">🎃 Pumpkin Gaming</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/contacto"}>Contacto</Nav.Link>
            <NavDropdown title="Plataformas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/pc"}>PC</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/ps"}>
                Playstation
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/xbox"}>Xbox</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Conoce más
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget  cantCarrito={0}/>
    </Navbar>
    
  );
}

export default BasicExample;
