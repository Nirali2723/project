import React , {useState}from 'react';
import './App.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import './Signup';
import {app} from './Firebase';
// import Signup from './Signup';
const auth = getAuth(app);

function Login() {

  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const signinuser =  () => {
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
      <input required="" name="" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input required="" name="" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      <label>Password</label>
    </div>
    <button onClick={signinuser} > Submit</button>
  </form>
  <p>Don't have an account? <button ><a href='/Signup'>Signup</a></button></p>
</div>

    </div>
  )
}

export default Login;