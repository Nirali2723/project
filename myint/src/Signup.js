import React , {useState} from 'react'

import{
    getAuth,
    createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider}
    from "firebase/auth";
    import {app} from "./Firebase";
    const auth =  getAuth(app);
    const googleProvider = new GoogleAuthProvider();

function Signup() {

    const [email, setEmail]= useState("");
    const [password, setpassword] = useState("");
    const createUser=()=>{
        createUserWithEmailAndPassword (auth,email,password).then((value)=>
        alert("success"));
    };

    const signupWithGoogle = ()=>{
        signInWithPopup(auth , googleProvider);
    }
  return (
    <div>
      <h1 style={{"textDecoration":"underline" }} >Signup page</h1>
      <p> Email:<input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='enter your email'></input> </p>
      <p> Password:<input onChange={(e)=>setpassword(e.target.value)} value={password} type="email" placeholder='enter your password'></input></p>
      <br/>
<button onClick={createUser} style={{"marginRight":"10px"}}> Signup </button>
<button onClick={signupWithGoogle}>signinwithgoogle</button>
    </div>


  );
}

export default Signup;
