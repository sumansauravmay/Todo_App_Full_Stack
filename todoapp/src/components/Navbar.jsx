import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navbarcomp = () => {
  return (
    <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">TodoApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/todo">TodoList</Nav.Link>
            <Nav.Link href="/">SignUp</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
   
  );
};

export default Navbarcomp;
