import React ,{useState} from 'react';
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth';
import {app} from './Firebase';


const auth = getAuth(app);

function Signin(){
  const[email, setEmail]=useState("");
  const[password,setPassword]=useState("");
  const Signinuser=(event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth,email,password).then((value)=>alert("sign in success")).catch((err)=>console.log(err));
  }
  return (
    <div>
      <h1 style={{"textDecoration":"underline"}}> Signin page </h1>
      <p style={{"marginBottom":"7px"}}>Enter your mail
      <input onChange={(e)=>setEmail(e.target.value)}type="email" placeholder='enter mail'></input></p>
      <p>enter your password
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='enter your pasword'></input>
      </p>
      <button onClick={Signinuser}> Signin </button>
    </div>
  )
}

export default Signin;
