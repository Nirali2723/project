import { React } from "react";
import "./App.css";
import main1 from "./images/main1.gif";
import logomain4 from "./images/logomain4.png";
import Logout1 from "./Logout1";
import "./Hireartist";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Login";
import "./Service";
import "./About";
import "./Contact";
import "./About";
import "./Testimonial";
import Footer from "./Footer";
import Swipper from "./Swipper";
// import background from './images/background.jpg';
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Popup from "reactjs-popup";
import Login from "./Login";

import classNames from "classnames";

import "./Navbar.css";
// import "./Progress.css";
import wp from "./images/wp.webp"
import Stepper from "./Stepper";

import Button from '@mui/material/Button';

import tsvideo from "./images/tsvideo.mp4";
import Testimonial from "./Testimonial";

function Home() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 100);

    // return () => {
    //   clearInterval(interval);
    // };
  });

  return (
    <div className="App">
      <div className="body" >
      
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
              style={{ "padding-left": "4em",
                "padding-top": "1em"}}
            >
              <button className="dropbtn"> Login </button>
              <div class="dropdown-content">
                {/* <a href="/Popup">Recruiter
   </a> */}

<Popup
                  trigger={<a style={{ cursor: "pointer" }}> Recruiter </a>}
                  model
                  nested
                >
                  {(close) => (
                    <div className="popuprec" >
                      <Logout1 />
                    </div>
                  )}
                </Popup>
                <Popup
                  trigger={<a style={{ cursor: "pointer"  }}> Artist </a>}
                  model
                  nested
                >
                  {(close) => (
                    <div>
                    
                        <div className="popupart"><Logout1  /></div> 
                      
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
                       <div className="popupadmin"><Logout1  /></div> 
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>


        <div >
         <img src={wp} className="mimg" />
        </div>


        <div >
          <h2 className="heading">
            Achieve your dreams by connecting to Talent Search
          </h2>

          <div className="div1">
            <Stepper />
          </div>

          <div className="mdiv">
            <div className="div2">
              <img
                src={main1}
                style={{
                  height: "367px",
                  " width": "45em",
                  "padding-top": "6px",
                }}
              ></img>
            </div>

            <div className="div2">
              <p style={{ fontSize: "25px", padding: "15px " }}>
                FIND STARDOM,
                <br></br>
                FIND STARS
              </p>

              <p style={{ fontSize: "23px", padding: "15px" }}>
                Grab various career<br></br>opportunities in singing
              </p>

              
                <a className="abtbtn"> <Button variant="contained" style={{"backgroundColor":" rgb(157, 237, 237)" ,"marginTop":"28px","color":"black"}}>Hire an Artist</Button></a> 

              <br></br>
              <a className="abtbtn"> <Button variant="contained" style={{"backgroundColor":" rgb(157, 237, 237)" ,"marginTop":"28px","color":"black"}}>Register as an Artist</Button></a> 

            </div>
          </div>

          <div>
            <h3 className="h3">FIND THE TALENT THAT FITS YOUR ACTUALL NEED</h3>

            <div style={{ display: "flex" }}>
              <div className="cm2div">
                <div className="p1div">
                <p style={{"fontSize":"23px"}}>Search for more information</p>

                <a href="Hireartist" className="abtbtn"> <Button variant="contained" style={{"backgroundColor":" rgb(157, 237, 237)" ,"marginTop":"28px","color":"black"}}>Search</Button></a> 
                <p style={{ margin: "36px 27px 18px 70px" ,"fontSize":"20px" }}>
        Search for various artists which can be hired<br></br>
           It will redirect and help you to find perfect artist as per your requirement. 
          </p>

                </div>
              </div>

              <div className="cm2div" >
              <video src={tsvideo} autoPlay muted loop height="500px" width="800px" style={{"marginTop":"-22px" ,"border":"5px" ,"borderRadius":"19px"}} ></video>
              </div>

            </div>

            
          </div>

          <div className="test">

<Testimonial/>
</div>



<div>
          <Swipper />
        </div>


          <div className="mnicon">
            <div className="subdiv">
              <p>
                <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png " className="iconimg" />
              </p>

              <h1 style={{"margin-left":"2em" ,"fontSize":"1.5em"}}>
                <CountUp start={0} end={2502} duration={10} />{" "}
              </h1>
              <p className="follower">Instagram Followers</p>
            </div> 

            <div className="subdiv">
              <p>
                {" "}
                <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" className="iconimg"></img>
              </p>
              <h1 style={{"margin-left":"2em" ,"fontSize":"1.5em"}}>
                <CountUp start={0} end={2091} duration={10} />{" "}
              </h1>
              <p className="follower">Facebook Followers</p>
            </div>

            <div className="subdiv">
              <p>
                <img src="https://img.icons8.com/doodle/48/000000/twitter--v1.png "  className="iconimg"/>
              </p>

              <h1 style={{"margin-left":"2em","fontSize":"1.5em"}}>
                <CountUp start={0} end={1890} duration={10} />{" "}
              </h1>
              <p className="follower">Twitter Followers</p>
            </div>
          </div>

          <div className="footer">
            {/* <p>logo</p> */}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
