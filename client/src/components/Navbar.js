import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";


export default function Navbarx () {
  return (
    <Navbar bg="dark" variant="dark" style={{ width:"100vw"}}>
      <Container>
        <Navbar.Brand href="/">
          <h4>StreamEzy</h4>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/about" className="m-auto">
            About
          </Nav.Link>
            <Nav.Link href="/login">
              <Button type="button" className="btn btn-outline-primary">
                Login
              </Button>
            </Nav.Link>
          
         
            <Nav.Link href="/signup">
              <Button type="button" className="btn btn-outline-info">
                Register
              </Button>
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
