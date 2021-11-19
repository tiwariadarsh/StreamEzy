import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "../style/Loginpage.css";
// import * as IPFS from 'ipfs-core'
import { v4 as uuidv4 } from 'uuid';
import * as IPFS from 'ipfs'
import OrbitDB from 'orbit-db'
import { signinDb } from '../utils';

var orbitdb;
var ipfs;

export default function Signup() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  var ipfs;
  
  const register = async (event) => {
    event.preventDefault()
    const ipfsOptions = { repo : './ipfs', }
    ipfs = await IPFS.create(ipfsOptions)
    // Create OrbitDB instance
    orbitdb = await OrbitDB.createInstance(ipfs)

    if(password!==confirmPassword || name === "" || email === "" || password === "" || confirmPassword === ""){
      window.alert('Error!')
      setname('')
      setpassword('')
      setemail('')
      setconfirmPassword('')
      return;
    }
    const db = await orbitdb.docs(signinDb)
		await db.load()
    const value = db.get(email)
    if(value[0]){
      window.location.reload();
    }else{
      db.put({_id:email, name: name, password:password,email:email }, { pin: true })
      .then(res=>{
        console.log(res)
        const value = db.get(email)
        window.localStorage.setItem('user',JSON.stringify(JSON.stringify(value[0])))
        window.location.href = './'
      })
      .catch(err=>{
        window.location.reload();
      })
    }
  }

    return (
      <div className="login-body">
      <div className="login">
      <div class="container" id="container">
<div class="form-container sign-in-container">
  <form className="frm">
    <h2 className="h2tag">Register</h2>
    <div class="social-container">
      <a href="#" class="social social-logo"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="social social-logo"><i class="fab fa-google-plus-g"></i></a>
      <a href="#" class="social social-logo"><i class="fab fa-linkedin-in"></i></a>
    </div>
    <span>Create your account</span>
    <input value={name} onInput={(event)=>setname(event.target.value)} name='name' type="text" placeholder="Name" className="inp" />
    <input value={email} onInput={(event)=>setemail(event.target.value)} name='email' type="email" placeholder="Email" className="inp" />
    <input value={password} onInput={(event)=>setpassword(event.target.value)} name='password' type="password" placeholder="Password" className="inp" />
    <input value={confirmPassword} onInput={(event)=>setconfirmPassword(event.target.value)} name='confrirmpassword' type="password" placeholder="Confirm Password" className="inp" />
    <button onClick={(event)=>register(event)} className="butt">Sign Up</button>
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
