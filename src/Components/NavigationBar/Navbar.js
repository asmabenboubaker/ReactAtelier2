import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Ma Boutique</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact to="/" activeClassName="active">
          Accueil
        </Nav.Link>
        <Nav.Link as={NavLink} to="/products" activeClassName="active">
          Produits
        </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavigationBar;
