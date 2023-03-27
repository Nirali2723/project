import React from 'react'
import "./App.css"
import logomain4 from "./images/logomain4.png"
import Home from './Home';

function Footer() {
  return (
    <div className='App'>
       <div className="footer">
            <p><img src={logomain4} alt="" className='footerlogo'/></p>

            <div className="f1">
              <div className="f2">
                <h2>COMPANY</h2>
                <p style={{"padding":"10px 0px 15px 0px"}}>REACH US</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.068562743966!2d72.53590744960218!3d23.057947820719313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851a5d3e4e0f%3A0x249acb663e46af9b!2sSoftCoding%20Solutions!5e0!3m2!1sen!2sin!4v1676882619444!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{
                    border: "2px solid white",
                    height: "250px",
                    width: "370px",
                  }}
                ></iframe>

                <p
                  style={{
                    "margin-top": "3.5em",
                    "margin-left": "-13em",
                    "text-decoration": "underline",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  KINDLY REFER TO OUR PRIVACY POLICY <br></br>
                  T& C APPLIED
                </p>
              </div>

              <div className="f2">
                <div style={{"marginLeft":"30px"}}>
                <h2 style={{"margin-left":"8px"}} >NAVIGATE</h2>
                <ul
                  style={{
                    listStyleType: "none",
                    textAlign: "left",
                    marginLeft: "9em",
                  }}
                >
                  <li className="lifo"><a href='/'>Home</a></li>
                  <li className="lifo"><a href='About'>About</a></li>
                  <li className="lifo"> <a href='#'>Queries</a></li>

                  <li className="lifo">
                    <a href="Hireartist" style={{ textDecoration: "none" }}>
                      Hire Artists{" "}
                    </a>
                  </li>
                  <li className="lifo">Talent Agencies</li>
                  <li className="lifo">
                    <a href="Service" style={{ textDecoration: "none" }}>
                      Managed Services{" "}
                    </a>
                  </li>
                </ul>
                </div>
              </div>

              <div className="f2">
                <h2>FOLLOW US</h2>
                <div className='iconimg1'>
                  <img
                    src="https://img.icons8.com/color/48/000000/instagram-new--v2.png "
                    style={{ padding: "10px 10px 10px 10px" }}
                  />
                  <img
                    src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
                    style={{ padding: "10px 10px 10px 10px" }}
                  />
                  <img
                    src="https://img.icons8.com/doodle/48/000000/twitter--v1.png "
                    style={{ padding: "10px 10px 10px 10px" }}
                  />
                </div>

                <h3 style={{"padding":"10px 0px 15px 0px"}}>MAIL US</h3>
                <p>
                  <a href="patelnirali2327@gmail.com" style={{"color":"white"}}>
                    patelnirali2327@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    
   
  )
}

export default Footer
