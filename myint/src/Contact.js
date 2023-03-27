import React, { useState } from "react";
import c2 from "./images/c2.png";
import logomain4 from "./images/logomain4.png";
import Popup from "reactjs-popup";
import Login from "./Login";
import "./Hireartist";
import "./App.css";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import About from "./About";
import Logout1 from "./Logout1";
const Contact = () => {
  const [userData, setUserData] = useState({
    Name: "",
    phone: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { Name, phone, email, message } = userData;

    if (Name && phone && email && message) {
      const res = fetch(
        "https://singing-b9093-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            phone,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          Name: "",
          phone: "",
          email: "",
          message: "",
        });
        alert("Data Submitted Successfully");
      } else {
        alert("Plz fill the data");
      }
    } else {
      alert("Plz fill the data");
    }
  };

  return (
    <>
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
      </div>

      <section className="section1">
        <div>
          <div>
            <div>
              <div className="divmain">
                <div className="leftdiv">
                  <h1 style={{ "padding-top": "10px", fontSize: "22px" }}>
                    CONNECT WITH US <br />
                  </h1>

                  <p style={{ paddingTop: "20px", fontSize: "20px" }}>
                    Feel free to contact us<br></br>
                    We will try our best to answer all your queries.
                  </p>
                  <figure>
                    <img src={c2} alt="contatUsImg" className="c1img" />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="rdiv">
                  <div className="rightdiv">
                    <form method="POST">
                      <div>
                        <h1
                          style={{
                            padding: "10px 0px 0px 24px",
                            fontSize: "22px",
                          }}
                        >
                          KINDLY FILL OUT THE CONTACT FORM
                        </h1>

                        <div className="datadiv">
                          <p className="plabel">
                            <label className="labels">Name</label>
                          </p>
                          <input
                            type="text"
                            name="Name"
                            // className="c-inp"
                            placeholder=" Enter your Full Name"
                            value={userData.Name}
                            onChange={postUserData}
                            className="w-5/6 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-7 transition-colors duration-200 ease-in-out "
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="datadiv">
                          <p className="plabel">
                            <label className="labels"> Contact Number </label>
                          </p>

                          <input
                            type="number"
                            name="phone"
                            id=""
                            placeholder="Phone Number "
                            value={userData.phone}
                            onChange={postUserData}
                            className="w-5/6 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out  w-27em"
                          />
                        </div>

                        <div className="datadiv">
                          <p className="plabel">
                            <label className="labels">Mail-Id</label>{" "}
                          </p>
                          <input
                            type="email"
                            name="email"
                            id=""
                            className="w-5/6 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-7 transition-colors duration-200 ease-in-out  w-27em"
                            placeholder=" Enter your Email "
                            value={userData.email}
                            onChange={postUserData}
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="datadiv ">
                          <p className="plabel">
                            <label className="labels">Message</label>
                            <br />
                          </p>

                          <input
                            style={{
                              "border-radius": "5px",
                              width: "25em",
                              height: "11em",
                            }}
                            type="textarea"
                            name="message"
                            id=""
                            placeholder="Enter Your Message"
                            value={userData.message}
                            onChange={postUserData}
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div class="datadiv">
                        <input type="checkbox" />

                        <label>
                          I agree that Talent Search may contact me at the email
                          address or phone number above.
                        </label>
                      </div>

                      <a href="">
                        <Button
                          type="submit"
                          onClick={submitData}
                          variant="contained"
                          style={{
                            backgroundColor: " rgb(157, 237, 237)",
                            margin: "20px 0px 20px 20px",
                            color: "black",
                          }}
                        >
                          Submit
                        </Button>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
