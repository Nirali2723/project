import React ,{Component, useState} from 'react';
import './App.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {app} from './Firebase';
import './Signup';
import './Signin';

const auth = getAuth(app);

function Login() {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const signinuser =  (event) => {
      event.preventDefault()
signInWithEmailAndPassword(auth,email,password)
.then((value)=> alert("sign in success"))
.catch((err)=> console.log(err));   
    };
 
  return (
   
    <div className='maindiv'>

<div class="login-box">
  <p>Login</p>
  <form>
    <div class="user-box">
      <input required="" name="" type="email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
      <label> Email </label>
    </div>
    
    <div class="user-box">
      <input required="" name="" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      <label>Password</label>
    </div>
   <button onClick={signinuser}>
    <a href>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
    </button>
  
  </form>

  <p>Don't have an account? <button style={{"cursor":"pointer"}} > <  a href='Signup' class="a2">Sign up!</a> </button></p>
</div>







    </div>
    )
}

export default Login;