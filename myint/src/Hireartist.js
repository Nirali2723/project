import React from "react";
import "./App.css";
import logomain4 from "./images/logomain4.png";
import './Home';
import './Service'
import Popup from "reactjs-popup";
import Login from "./Login";
import "./Navbar.css"
import "./Contact";
import Logout1 from "./Logout1";
function Hireartist() {
  return (
    <div className="App">
     <div>
          <div className="n1" style={{ height: "140px" }}>
            <div className="lg">
              <img
                src={logomain4}
                style={{
                  "padding-top": "5px",

                  height: "131px",
                  width: "213px",
                }}
              ></img>
            </div>

            <div className="it">
              <ul className="ul1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="Hireartist"> Hire Artists </a>
                </li>
                <li>
                  <a href="Service">Managed Services </a>
                </li>
                <li>
                  <a href="Contact">Contact Us </a>
                </li>

                <div className="dropdown">
                  <li>
                    <a>More</a>
                  </li>
                  <div
                    class="dropdown-content"
                    style={{
                      "margin-left": "15px",
                      height: "99px",
                      width: "80px",
                    }}
                  >
                    <a href="About">About us</a>
                    <a href="#">Talent Agencies</a>
                  </div>
                </div>
              </ul>
            </div>

            <div
              className="dropdown"
              style={{ "padding-left": "4em", "padding-top": "1em" }}
            >
              <button className="dropbtn"> Login </button>
              <div class="dropdown-content">
                {/* <a href="/Popup">Recruiter </a> */}

<Popup
                  trigger={<a style={{ cursor: "pointer"}}>Recruiter</a>}
                  model
                  nested
                >
                  {(close) => (
                    <div style={{"marginTop":"2em" ,"position":"absolute" ,"margin-left":"2.3em"}}>
                      <Logout1 />
                    </div>
                  )}
                </Popup>
                <Popup
                  trigger={<a style={{ cursor:"pointer"}}>Artist</a>}
                  model
                  nested
                >
                  {(close) => (
                    <div>
                        <div style={{"position":"relative" ,"top":"-10px" ,"left":"45px"}}><Logout1  /></div> 
                      
                    </div>
                  )}
                </Popup>

                <Popup
                  trigger={<a style={{ cursor: "pointer" }}>Nirali</a>}
                  model
                  nested
                >
                  {(close) => (
                    <div >
                       <div style={{"position":"relative" ,"top":"-10px" ,"left":"45px"}}><Logout1  /></div> 
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>

<div className="artist">
   <h2>HIRE DIFFERENT TALENTED ARTISTS ACCORDING TO YOUR PREFERENCE</h2>
   </div>

    </div>
  );
}

export default Hireartist;
