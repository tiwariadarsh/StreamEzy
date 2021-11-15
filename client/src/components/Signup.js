import React from 'react'
import { Link } from "react-router-dom";
import "../style/Loginpage.css";

export default function Signup() {
    return (
      <div className="login-body">
      <div className="login">
      <div class="container" id="container">
<div class="form-container sign-in-container">
  <form action="#" className="frm">
    <h2 className="h2tag">Register</h2>
    <div class="social-container">
      <a href="#" class="social social-logo"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="social social-logo"><i class="fab fa-google-plus-g"></i></a>
      <a href="#" class="social social-logo"><i class="fab fa-linkedin-in"></i></a>
    </div>
    <span>Create your account</span>
    <input type="text" placeholder="Name" className="inp" />
    <input type="email" placeholder="Email" className="inp" />
    <input type="password" placeholder="Password" className="inp" />
    <input type="password" placeholder="Confirm Password" className="inp" />
    <button className="butt">Sign Up</button>
  </form>
</div>
<div class="overlay-container">
  <div class="overlay">
    <div class="overlay-panel overlay-right">
      <h1 className="h1tag">Hello, Friend!</h1>
      <p className="para">Already have an account with us?</p>
      <Link to="/login"> <button className="ghost butt" id="signUp">Sign In</button> </Link>
    </div>
  </div>
</div>
</div>
</div>
</div>
    )
}
