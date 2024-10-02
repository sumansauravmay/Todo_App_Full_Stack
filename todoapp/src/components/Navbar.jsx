import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbarcomp = () => {
  const navigate=useNavigate();
  let username = JSON.parse(localStorage.getItem("username"));


const handlelogin=()=>{
if(username){
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  navigate("/");
}else{
  navigate("/login");
}
}
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">TodoApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/todo">TodoList</Nav.Link>
              <Nav.Link href="/">{username ? username : "Signup"}</Nav.Link>
              <Nav.Link onClick={handlelogin}>{username ? "Logout" : "Login"}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcomp;
