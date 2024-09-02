import Container from 'react-bootstrap/Container';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">Mi Empresa</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/reportes">Reporte diario</Nav.Link>
          <Nav.Link as={Link} to="/informe">Informe</Nav.Link>
          <Button as={Link} to="/login" className='position-absolute top-0 end-0 m-2' variant="primary">Iniciar sesion</Button>{' '}
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}