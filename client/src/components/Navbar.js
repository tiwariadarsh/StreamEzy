import React from "react";
import { Button ,Nav,Navbar,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbarx () {
<<<<<<< HEAD
  return (   
    <Navbar className="navbar">
=======
  return (
    <Navbar bg="dark" variant="dark" style={{ width:"100vw"}}>
>>>>>>> 71659ad83d283ecaf52eff0cda26f38b7540de3c
      <Container>
        <Navbar.Brand href="/">
          <h2>StreamEzy</h2>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/about" className="m-auto" style={{color:"grey"}}>
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
