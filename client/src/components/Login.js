import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../style/Loginpage.css";
// import * as IPFS from 'ipfs-core'
import * as IPFS from 'ipfs'
import OrbitDB from 'orbit-db'
import { signinDb } from '../utils';

var orbitdb;
var ipfs;


export default function Login() {
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	var ipfs;

	const login = async (event) => {
		event.preventDefault()
		const ipfsOptions = { repo : './ipfs', }
		ipfs = await IPFS.create(ipfsOptions)
		var id = await ipfs.id()
		// Create OrbitDB instance
		orbitdb = await OrbitDB.createInstance(ipfs)

		const db = await orbitdb.docs(signinDb)
		await db.load()
		const value = db.get(email)
		if(value[0]){
			if(value[0].password===password){
				console.log('correct');
				window.localStorage.setItem('user',JSON.stringify(JSON.stringify(value[0])))
				window.location.href = './'
			}else{
				window.location.reload();
			}
		}else{
			window.location.reload();
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
