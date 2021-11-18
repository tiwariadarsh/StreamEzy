import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "../style/Loginpage.css";
import * as IPFS from 'ipfs-core'
import { v4 as uuidv4 } from 'uuid';

export default function Signup() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  var ipfs;

  // const load = async () => {
  //    ipfs = await IPFS.create()
  // }
  // useEffect(() => {
  //   load()
  // }, [])


  const register = async (event) => {
    event.preventDefault()
    ipfs = await IPFS.create()
    console.log(name,email,password);
    if(password!==confirmPassword || name === "" || email === "" || password === "" || confirmPassword === ""){
      window.alert('Error!')
      setname('')
      setpassword('')
      setemail('')
      setconfirmPassword('')
      return;
    }
    var userId = uuidv4();
    console.log(userId);
    await ipfs.files.mkdir(`/${email}`)
    const userDir =  await ipfs.files.stat(`/`)
    console.log(userDir.cid.toString());
    var user = {
      name:`${name}`,
      email:`${email}`,
      password:`${password}`,
      uid:`${userId}`
    }
    await ipfs.files.write(`/${email}/user.txt`, JSON.stringify(user), { create: true })
    window.localStorage.setItem('user',JSON.stringify(user))
    window.location.href = './'
    const chunks = []
    var result;
    for await (const chunk of ipfs.files.read(`/${email}/user.txt`)) {
      var enc = new TextDecoder("utf-8");
      result = enc.decode(chunk)
    }
    console.log(JSON.parse(result));
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
