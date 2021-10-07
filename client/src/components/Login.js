import React from 'react'
import { Card, Form, Button } from "react-bootstrap";
export default function Login() {
    return (
        <div className="container-sm" style={{ width: "55vh" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form>
            <Form.Group>
              <Form.Label>E-Mail</Form.Label>
              <Form.Control placeholder="alice@gmail.com"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="abcd$123"
              />
            </Form.Group>
            <Button
              type="submit"
              variant="outline-secondary"
              className="w-100 my-3"
              onClick={console.log("login complete")}
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
    )
}
