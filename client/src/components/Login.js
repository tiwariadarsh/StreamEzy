import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../style/Loginpage.css";
import * as IPFS from 'ipfs-core'

export default function Login() {
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	var ipfs;

	const login = async (event) => {
		event.preventDefault()
		ipfs = await IPFS.create()
		const chunks = []
		var result;
		for await (const chunk of ipfs.files.read(`/${email}/user.txt`)) {
		  var enc = new TextDecoder("utf-8");
		  result = enc.decode(chunk)
		}
		console.log(JSON.parse(result));
		var user = JSON.parse(result)
		if(password === user.password){
			window.localStorage.setItem('user',JSON.stringify(user))
			window.location.href = './'
		}else{
			window.alert('wrong credentials')
		}
	}

    return (
		<div className="login-body">
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
			<input value={email} onInput={(event)=>setemail(event.target.value)} name='email'  type="email" placeholder="Email" className="inp" />
			<input value={password} onInput={(event)=>setpassword(event.target.value)} name='password' type="password" placeholder="Password" className="inp" />
		
			<button onClick={(event)=>login(event)} className="butt">Sign In</button>
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
    </div>
    )
}
