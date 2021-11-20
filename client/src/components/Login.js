//import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import AuthValidation from '../utils/AuthValidation';

import "../style/Loginpage.css";


class Login extends Component {
    state = {
        email: '',
        password: '',
        
        status: '',
        loggedIn: false,
    }


// export default function Login() {
// 	const [email, setemail] = useState('')
// 	const [password, setpassword] = useState('')


	// const login = async (event) => {
	// 	event.preventDefault()
		
	// }



	onSignIn = async (event) => {
		event.preventDefault()

        if (this.state.email !== '' && this.state.password !== '' && this.state.digicode !== '') {
            let email = this.state.email.trim();
            let password = this.state.password.trim();
          

            let usernameToSend = email;

            //===
            if (password.length < 8) {
                window.alert("at least 8 characters for password")
                this.setState({
                   
                    status: 'failed',
                    password: '',
                    digicode: '',
                });
                return;
            } else {

            } 
			// if (digicode.length !== 6) {
            //     this.setState({
            //         alertMessage: "6 digit required for digicode",
            //         status: 'failed',
            //         digicode: ''
            //     });
            //     return
            // } 
			
                let userAddress = await this.props.contract.methods.getUserAddress()
                    .call({ from: this.props.account });

                if (userAddress === '0x0000000000000000000000000000000000000000') {
                    window.alert('Account does not exists')
                    this.setState({
                     
                        status: 'failed',
                        email: '',
                        password: '',
                       
                    });
                    return;
                } else {
                    let validated = await
                        AuthValidation(
                            email,
                            this.props.account,
                            password, 
                            this.props.web3,
                            this.props.contract
                        );

                    if (!validated) {
                        window.alert('Incorrect log in')
                        this.setState({
                           
                            status: 'failed',
                            email: '',
                            password: '',
                        
                        });
                        return
                    } else {
                        window.alert("Sign in successful")
                        this.setState({
                            email: '',
                            password: '',
                       
                            status: 'success',
                            
                            loggedIn: true
                        });

                        this.props.userSignedIn(
                            this.state.loggedIn,
                            usernameToSend
                        );

                        return;
                    }
                }
            
        }


        this.setState({
            email: '',
            password: '',
        
        })
    }



  render() {
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


			<input   //email
			required
			type='text'
			name='email'
			placeholder='Email'
			value={this.state.email}
			autoComplete="email"
			className="inp" 
			onInput={e => this.setState({ email: e.target.value })}
	        />


			<input  //password
			required 
			type='password'
			name='password'
			placeholder='Password'
			value={this.state.password}
			autoComplete="current-password"
			name='password'
			onInput={e => this.setState({ password: e.target.value })}
		    />
		
			<button onClick={this.onSignIn} className="butt">Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-right">
				<h1 className="h1tag">Hello, Friend!</h1>
				<p className="para">Enter your personal details and start journey with us</p>

				<div onClick={()=>window.location.href='/signup'}> <button className="ghost butt" id="signUp">Sign Up</button> </div>
			</div>
		</div>
	</div>
</div>
</div>
    </div>
	)
}
}
export default Login
