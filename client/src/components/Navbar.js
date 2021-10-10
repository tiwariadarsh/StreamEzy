import React from "react";
import { Button ,Nav,Navbar,Container} from "react-bootstrap";
import "../style/Navbar.css";

export default function Navbarx () {
  return (
    <Navbar bg="dark" variant="dark" style={{ width:"100vw"}}>

      <Container>
        <Navbar.Brand href="/">
          <h2>StreamEzy</h2>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/about" className="m-auto" style={{color:"grey"}}>
            About
          </Nav.Link>
          <Nav.Link href="/viewpage" className="m-auto" style={{color:"white"}}>
            Go Live
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
