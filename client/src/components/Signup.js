import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import AuthenticationHash from '../utils/AuthenticationHash';
import "../style/Loginpage.css";

class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
       
        status: '',
        signedUp: false
    }

    onSignUp = async (event) => {
      event.preventDefault()
      if(this.state.password!==this.state.confirmPassword || this.state.name === "" || this.state.email === "" || this.state.password === "" || this.state.confirmPassword === ""){
        window.alert('Enter Valid Details!')
        // setname('')
        // setpassword('')
        // setemail('')
        // setconfirmPassword('')
        this.setState({
          alertMessage: "Error!",
          status: 'failed',
          password: '',
          confirmPassword:'',
        
      });
        return;
      }


        if (this.state.name !== '' && this.state.password !== '' && this.state.email !== '' && this.state.confirmPassword !== '') {
            let name = this.state.name.trim();
            let password = this.state.password.trim();
            let email = this.state.email.trim();
            let confirmPassword =this.state.confirmPassword .trim();
            //===
            if (password.length < 8) {
              window.alert("at least 8 characters for password")
                this.setState({
                    
                    status: 'failed',
                    password: '',
                    confirmPassword:'',
                  
                });
                return;
            } else {
            }
            // } if (digicode.length !== 6) {
            //     this.setState({
            //         alertMessage: "6 digit required for digicode",
            //         status: 'failed',
            //         digicode: ''
            //     });
            //     return
            // } else {
                let userAddress = await this.props.contract.methods.getUserAddress()
                    .call({ from: this.props.account });

                if (userAddress !== '0x0000000000000000000000000000000000000000') {
                  window.alert('this account already exists')
                    this.setState({
                    
                        status: 'failed',
                        name: '',
                        password: '',
                        email:'',
                        confirmPassword:'',
                    });

                    return;
                } else {
                    let hash = await AuthenticationHash(name, this.props.account, password, email, confirmPassword ,this.props.web3);

                    await this.props.contract.methods.register(hash).send({ from: this.props.account });
                    window.alert("Signup successful")

                    this.setState({
                        name: '',
                        password: '',
                        email:'',
                        confirmPassword:'',
                        status: 'success',
                     
                        signedUp: true
                    });

                    this.props.accountCreated(this.state.signedUp);
                    return;
                }
            }
      

    }
  
render(){
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
    
    <input    //username
      required
      type='text'
      name='name'
      placeholder='Name'
      value={this.state.Name}
      autoComplete="Name"
      className="inp" 
      onChange={e => this.setState({ Name: e.target.value })}
   
     />


    <input //email
       required
       type="email"
       name="email"
       placeholder="Email"
       className="inp" 
       value={this.state.email}
       autoComplete="email"
       onChange={e => this.setState({ email: e.target.value })}
    />




    <input  //password
       required
       type='password'
       name="password"
       placeholder='password'
       value={this.state.password}
       autoComplete="current-password"
       onChange={e => this.setState({ password: e.target.value })} name='password' type="password" placeholder="Password" className="inp" 
    />


    <input  //confirmPassword
       required
       type='password'
       name='Confirm Password'
       placeholder='Confirm Password'
       value={this.state.confirmPassword}
       className="inp" 
       autoComplete="current-password"
       onChange={e => this.setState({ confirmPassword: e.target.value })}
    />

    
    <button onClick={this.onSignUp} className="butt">Sign Up</button>  
     
 
  </form>
</div>
<div class="overlay-container">
  <div class="overlay">
    <div class="overlay-panel overlay-right">
      <h1 className="h1tag">Hello, Friend!</h1>
      <p className="para">Already have an account with us?</p>
      <div onClick={()=>this.props.routeChange('/login')}> <button className="ghost butt" id="signUp">Sign In</button> </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
    )
}
}

export default SignUp





























//old********************************************************88
// var orbitdb;
// var ipfs;

// export default function Signup() {
//   const [name, setname] = useState('')
//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')
//   const [confirmPassword, setconfirmPassword] = useState('')
//   var ipfs;
  
//   const register = async (event) => {
//     event.preventDefault()
//     const ipfsOptions = { repo : './ipfs', }
//     ipfs = await IPFS.create(ipfsOptions)
//     // Create OrbitDB instance
//     orbitdb = await OrbitDB.createInstance(ipfs)

//     if(password!==confirmPassword || name === "" || email === "" || password === "" || confirmPassword === ""){
//       window.alert('Error!')
//       setname('')
//       setpassword('')
//       setemail('')
//       setconfirmPassword('')
//       return;
//     }
//     const db = await orbitdb.keyvalue(signinDb)
// 		await db.load()
//     const value = db.get(email)
//     console.log(value)
//     if(value[0]){
//       window.location.reload();
//     }else{
//       db.put({_id:email, name: name, password:password,email:email }, { pin: true })
//       .then(res=>{
//         console.log(res)
//         const value = db.get(email)
//         window.localStorage.setItem('user',JSON.stringify(JSON.stringify(value[0])))
//         window.location.href = './'
//       })
//       .catch(err=>{
//         window.location.reload();
//       })
//     }
//   }

//     return (
//       <div className="login-body">
//       <div className="login">
//       <div class="container" id="container">
// <div class="form-container sign-in-container">
//   <form className="frm">
//     <h2 className="h2tag">Register</h2>
//     <div class="social-container">
//       <a href="#" class="social social-logo"><i class="fab fa-facebook-f"></i></a>
//       <a href="#" class="social social-logo"><i class="fab fa-google-plus-g"></i></a>
//       <a href="#" class="social social-logo"><i class="fab fa-linkedin-in"></i></a>
//     </div>
//     <span>Create your account</span>
//     <input value={name} onInput={(event)=>setname(event.target.value)} name='name' type="text" placeholder="Name" className="inp" />
//     <input value={email} onInput={(event)=>setemail(event.target.value)} name='email' type="email" placeholder="Email" className="inp" />
//     <input value={password} onInput={(event)=>setpassword(event.target.value)} name='password' type="password" placeholder="Password" className="inp" />
//     <input value={confirmPassword} onInput={(event)=>setconfirmPassword(event.target.value)} name='confrirmpassword' type="password" placeholder="Confirm Password" className="inp" />
//     <button onClick={(event)=>register(event)} className="butt">Sign Up</button>
//   </form>
// </div>
// <div class="overlay-container">
//   <div class="overlay">
//     <div class="overlay-panel overlay-right">
//       <h1 className="h1tag">Hello, Friend!</h1>
//       <p className="para">Already have an account with us?</p>
//       <Link to="/login"> <button className="ghost butt" id="signUp">Sign In</button> </Link>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>
//     )
//
 
