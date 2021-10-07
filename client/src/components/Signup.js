import React from 'react'
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signup() {
    return (
        <div className="container-sm" style={{ width: "55vh" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create Account</h2>
          <Form>
            <Form.Group>
              <Form.Label>User Name</Form.Label>
              <Form.Control placeholder="alice" />
            </Form.Group>
            <Form.Group>
              <Form.Label>E-Mail</Form.Label>
              <Form.Control placeholder="alice@gmail.com" />
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
              onClick={console.log("sign up complete")}
            >
              Sign Up
            </Button>
          </Form>
          <div>
            {" "}
            Already have an account <Link to="/login">Login</Link>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
    )
}
