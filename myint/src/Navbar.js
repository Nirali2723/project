import React from 'react'
import logomain from './images/logomain.png';
import "./Navbar.css"
import "./App.css"
import Popup from "reactjs-popup";
import Login from "./Login";

function Navbar() {
  return (
    <div>
      <div className='n1'>
        <div className='lg'>
            <img src={logomain} style={{"height": "141px",
    "width": "175px"}}></img>
        </div>



        <div className='it'>
            <ul className='ul1'>
                <li><a href='/'>Home</a></li>
                <li> <a href='/Hireartist'>Hire Artists</a></li>
                <li><a href='#'> Talent Agencies</a></li>
                <li><a href='/'>Managed Services </a></li>

                <div className="dropdown">
                <li><a>More</a></li>
                <div class="dropdown-content" style={{"min-width": "50px","height": "81px","width": "86px"}}>
    <a href="#" >About us</a>
    <a href="#">Contact</a>
   
  </div>
            </div>
            </ul>
        </div>

        <div className='dropdown' style={{"padding-left": "4em",
    "padding-top": "1em"}}>
            <button className='dropbtn'> Login </button>
            <div class="dropdown-content">
    
   {/* <a href="/Popup">Recruiter
   </a> */}

   <Popup trigger={
   
   <a style={{"cursor":"pointer"}}> Recruiter </a>
   } model nested>{
    close =>(
      <div>
        <Login/>
      </div>
    )
    
   }
    </Popup>

    <Popup trigger={
    <a style={{"cursor":"pointer"}}> Artist </a>
  } model nested>{
    close =>(
      <div>
        <Login/>
      </div>
    )
   }
    </Popup>




    <Popup trigger={
    <a style={{"cursor":"pointer"}}> Nirali </a>
  } model nested>{
    close =>(
      <div>
        <Login/>
      </div>
    )
    
   }
    </Popup>



  
</div>
            </div>



      </div>
    </div>
  )
}

export default Navbar
