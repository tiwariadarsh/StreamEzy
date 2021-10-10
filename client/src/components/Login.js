import React from 'react'
import { Card, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../style/Loginpage.css";
export default function Login() {
    return (
      <div className="login">
        <div class="container" id="container">
	<div class="form-container sign-in-container">
		<form action="#" className="frm">
			<h2 className="h2tag">Sign in</h2>
			<div class="social-container">
				<a href="#" class="social social-logo"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social social-logo"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social social-logo"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" className="inp" />
			<input type="password" placeholder="Password" className="inp" />
		
			<button className="butt">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1 className="h1tag">Hello, Friend!</h1>
				<p className="para">Enter your personal details and start journey with us</p>
				<Link to="/signup"> <button className="ghost butt" id="signUp">Sign Up</button> </Link>
			</div>
		</div>
	</div>
</div>
</div>
    //     <div className="container-sm" style={{ width: "55vh" , marginTop:"7rem" }}>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4" style={{ color : "red"}}>Sign In</h2>
    //       <Form>
    //         <Form.Group>
    //           <Form.Label>E-Mail</Form.Label>
    //           <Form.Control placeholder="alice@gmail.com"/>
    //         </Form.Group>
    //         <Form.Group>
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type="password"
    //             placeholder="abcd$123"
    //           />
    //         </Form.Group>
    //         <Button
    //           type="submit"
    //           variant="outline-secondary"
    //           className="w-100 my-3"
    //           onClick={console.log("login complete")}
    //         >
    //           Log In
    //         </Button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    // </div>
    )
}
