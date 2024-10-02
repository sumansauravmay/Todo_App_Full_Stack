import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navbarcomp = () => {
  let username = JSON.parse(localStorage.getItem("username"));

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">TodoApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/todo">TodoList</Nav.Link>
              <Nav.Link href="/">{username ? "" : "Signup"}</Nav.Link>
              <Nav.Link href="/login">{username ? username : "Login"}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcomp;
