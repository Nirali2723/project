import  React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, } from "firebase/auth";
import { app } from "./Firebase";
// import Signup from "./Signup";
import "./App.css";
import './App.css';
// import Signin from "./Signin";
// import Signup from "./Signup";
// import Hire from "./Hire";
import Signin from "./Signin";
import Login from "./Login";
const auth = getAuth(app);

function Logout() {
const [user,setUser] = useState(null);
useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            //yes you are logged in 
            setUser(user);
        } else{
            // user is Logged out 
            setUser(null);
        }
    });
},[]);
if (user === null){
    return(
        <div>
            {/* <Signup/> */}
            <Login/>
        </div>
     ) ;
}
return(
    <div className="all">
       <div className="dash" style={{"margin-left": "-65em"}}>
        <div className="logout1">
          
            <h1>Hello {user.email}</h1>
        <button onClick={() => signOut
        (auth)}>Logout</button>
        </div>
       </div>
       <div className="dashco"></div>
    </div>
);
}

export default Logout;