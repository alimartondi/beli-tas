import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">BerkualiTas</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Product</Nav.Link>
            <Nav.Link href="#pricing">Price</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
