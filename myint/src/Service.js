import React from 'react'
import "./App.css";
import logomain4 from "./images/logomain4.png";
import './Home'
import './Hireartist'
import Login from "./Login";
import Footer from './Footer';
import Logout1 from './Logout1';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { style } from '@mui/system';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState, useEffect } from "react";
import CountUp from 'react-countup';
import Popup from "reactjs-popup";
import About from './About';
import "./Navbar.css"




function Service() {

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
  
  });




const [isShown , setIsShown]=useState(false);
  const toggle = event =>{
    setIsShown(current => !current);
  }


  const [isShown1 , setIsShown1]=useState(false);
  const toggle1 = event1 =>{
    setIsShown1(current1 => !current1);
  }

  const [isShown2 , setIsShown2]=useState(false);
  const toggle2 = event2 =>{
    setIsShown2(current2 => !current2);
  }

  
    
  const [isShown3 , setIsShown3]=useState(false);
  const toggle3 = event3=>{
    setIsShown3(current3 => !current3);
  }


  
  return (
    <div className='App'>

{/* header */}

<div  style={{"font-family":"Georgia, 'Times New Roman', Times, serif;"}} >
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
{/* header */}


<div className='sdiv' >
<h2  style={{"textAlign":"center" , "paddingTop":"35px" ,"fontSize":"22px" }}>Why Managed Services?</h2>
<div className='gdiv'> 

    <div className='g1'>
       <p className='icon1'> <FormGroup> 
      <FormControlLabel control={<Checkbox defaultChecked style={{"fontSize":"200px" , "color": "rgb(157, 237, 237)"}} />  }  />
     
    </FormGroup></p> 
       <p className='serp'>Project management for your multivoice,multilingual and other complex needs</p>
    </div>


    <div className='g1'>
        <p className='icon1'><FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked style={{"fontSize":"200px" , "color": "rgb(157, 237, 237)"}} />  }  />
     
    </FormGroup></p>
        <p className='serp'>Help with sourcing, scheduling and working with voice actors</p>
    </div>


    <div className='g1'>
        <p className='icon1'><FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked style={{"fontSize":"200px" , "color": "rgb(157, 237, 237)"}} />  }  />

    </FormGroup></p>
        <p className='serp'>Live session coordination, translation and post-production when you need it</p>
    </div>


    <div className='g1'>
        <p className='icon1'><FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked style={{"fontSize":"200px" , "color": "rgb(157, 237, 237)"}} />  }  />
     
    </FormGroup></p>
        <p className='serp'>Financial flexibility to bill how you need to, and pay on your terms</p>
    </div>

</div>



{/* diff services*/}

<h2 className='serviceheading'>Here are some of our Services</h2>


{/* maindiv */}
<div >

{/* div1 */}
<div className='d1'> 


{/* div for img */}
<div  style={{"width":"50%"}}>
<img src={img1} alt="" className='img1'/>
</div>

{/* <div className='line'></div> */}

{/* div for para */}
<div style={{"width":"80%" ,"marginTop":"1em"}}>
<p  className='para1'>HIRED ARTISTS</p>
<p className='para2'>Fine artists create original and thought-provoking
 work, which may be aesthetically pleasing, 
shocking, or disruptive, through a variety of media
As a fine artist, you may specialise in a medium and
 concentrate on a particular subject matter. 
You may also focus on a type of art, for example, 
landscapes, portraits or abstract art. Or you may 
work laterally across subjects, mediums and 
even disciplines to explore ideas in unexpected 
ways and make original connections.</p>
</div>


</div>




{/* div2 */}

<div className='d1'>


{/* div for para */}
<div style={{"width":"80%"}}>
<p  className='para1'>GROWTH</p>
<p className='para2'>Employment of musicians and singers is projected
 to grow 4 percent from 2021 to 2031, about as fast
 as the average for all occupations.
About 20,800 openings for musicians and singers
 are projected each year, on average, over the decade.Many of those openings are expected to
 result from the need to replace workers who transfer to different occupations or exit the labor force, such 
as to retire.</p>
</div>



{/* div for img */}
<div style={{"width":"50%"}}>
<img src={img2} alt="" className='img2'/>
</div>

</div>





{/* div3 */}
 
<div  className='d1'>

{/* div for img */}
<div style={{"width":"50%"}}>
<img src={img3} alt="" className='img1'/>
</div>


{/* div for para */}
<div style={{"width":"80%"}}>
<p  className='para1' style={{"paddingTop":"2em"}}>MODULATION OF VOICE WHEREVER NECESSARY</p>
<p className='para2'>If you look up the term modulation in a dictionary
 you’ll see that the root word “modulate” means to change, alter, adjust, and so on. In different fields,the word can have more direct meanings, and this is certainly true in music.
There really are two definitions of modulate in musicone that means to change key, and another that means to vary the volume of sound emitted from some source.</p>
</div>

</div>






{/* div4 */}

<div className='d1' >

{/* div for para */}
<div>
<p  className='para1'>MAKE THE CONCEPT OF BIG-5 CLEAR</p>
<p className='para2'>Employment of musicians and singers is projected
 to grow 4 percent from 2021 to 2031, about as fast
 as the average for all occupations.
About 20,800 openings for musicians and singers
 are projected each year, on average, over the decade.Many of those openings are expected to
 result from the need to replace workers who transfer to different occupations or exit the labor force, such 
as to retire.</p>
</div>

{/* div for img */}
<div>
{/* <img src={} alt="" /> */}
</div>


</div>

</div>



{/* faq's */}

<h2 className='faqh'> Here are our common FAQ'S</h2>

{/* FAQ1 */}

<div className='faq'>
<p style={{"display":"inline" ,"marginRight":"45em"}} >Do we need to pay before communicating with any of the artists?</p>
<button onClick={toggle} style={{"display":"inline" , "borderRadius":"21%" , "height":"30px" , "width":"39px"}}> <KeyboardArrowDownIcon/></button>
{isShown &&(
<p> Yes, you need to get to know about the payment procedure and get the payment done before contacting any of the Artists in case if you are a Recruiter and also the same process is to be followed if you are an Artist. </p>
)}

{isShown }

</div>

{/* FAQ2 */}

<div className='faq'>
<p style={{"display":"inline" ,"marginRight":"50.5em"}}> How to we get to know about what Recruiters need? </p>
<button onClick={toggle1} style={{"display":"inline" , "borderRadius":"21%" , "height":"30px" , "width":"39px"}}><KeyboardArrowDownIcon/></button>
{isShown1 &&(
<p> Posts created by Recruiters will help Artists to fing the most relevent work for them. Additionally with this Artists would be able to search for the work of their tastes. </p>
)}

{isShown1 }
</div>


{/* FAQ3
 */}
<div className='faq'>
<p style={{"display":"inline" ,"marginRight":"48.7em"}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
<button onClick={toggle2} style={{"display":"inline" , "borderRadius":"21%" , "height":"30px" , "width":"39px"}}><KeyboardArrowDownIcon/></button>
{isShown2 &&(
<p> yes</p>
)}

{isShown2 }
</div>


{/* FAQ4 */}


<div className='faq'>
<p style={{"display":"inline" ,"marginRight":"45em"}} >Do we have to pay before communicating with any of the artists?</p>
<button onClick={toggle3} style={{"display":"inline" , "borderRadius":"21%" , "height":"30px" , "width":"39px"}}><KeyboardArrowDownIcon/></button>
{isShown3 &&(
<p> yes</p>
)}

{isShown3 }
</div>



{/* footer */}

<div className="footer">

{/* <p>logo</p>

<div className="f1">

  <div className="f2">
<h2 style={{"padding-top": "4px"}}>COMPANY</h2>
<p style={{"paddingTop":"11px"}}>REACH US</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.068562743966!2d72.53590744960218!3d23.057947820719313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851a5d3e4e0f%3A0x249acb663e46af9b!2sSoftCoding%20Solutions!5e0!3m2!1sen!2sin!4v1676882619444!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{"border":"2px solid white" , "height":"250px" , "width":"370px"}}></iframe>


<p style={{"margin-top": "3.5em",
    "margin-left": "-13em",
    "text-decoration": "underline" , "fontSize":"12px"}}> KINDLY REFER TO OUR PRIVACY POLICY <br></br>
T& C APPLIED</p>
  </div>

<div className="f2">
<h2 style={{"padding":"1px"}}>NAVIGATE</h2>
<ul style={{"listStyleType":"none" , "textAlign":"left" ,"marginLeft":"7em"}}>
  <li  className="lifo">Home</li>
  <li className="lifo">About</li>
  <li className="lifo">Queries</li>
  <li className="lifo">Certificates</li>
  <li className="lifo"><a href="Hireartist" style={{"textDecoration":"none"}}>Hire Artists </a></li>
  <li className="lifo">Talent Agencies</li>
  <li className="lifo"><a href="Service" style={{"textDecoration":"none"}}>Managed Services </a></li>
</ul>
</div>



<div className="f2">
  <h2>FOLLOW US</h2>
  <div>
  <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png " style={{"padding":"10px 10px 10px 10px"}}/>
    <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"  style={{"padding":"10px 10px 10px 10px"}}/>
    <img src="https://img.icons8.com/doodle/48/000000/twitter--v1.png "  style={{"padding":"10px 10px 10px 10px"}}/>
  </div>

  <h3>MAIL US</h3>
  <p><a href="patelnirali2327@gmail.com">patelnirali2327@gmail.com</a></p>

  
</div> */}


<Footer/>
</div>
</div>








    </div>
  )
}


export default Service;
