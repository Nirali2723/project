import React from "react";
import "./App.css";
import abt from "./images/abt.jpg";
import "./About.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Button from "@mui/material/Button";
import Contact from "./Contact";
import Login from "./Login";
import Popup from "reactjs-popup";
import logomain4 from "./images/logomain4.png";
import Navbar from "./Navbar";
import "./Navbar.css";
import Logout1 from "./Logout1";
import Footer from "./Footer";
import nirali from "./images/nirali.jpg";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
function About() {
  return (
    <div className="App">
      {/* div1 */}

      {/* navbar */}

      <div className="n1">
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
              <a href="Hireartist">Hire Artists</a>
            </li>
            <li>
              <a href="Service">Managed Services </a>
            </li>
            <li>
              <a href="Contact"> Contact Us</a>
            </li>

            <div className="dropdown">
              <li>
                <a>More</a>
              </li>
              <div class="dropdown-content" id="more">
                <a href="#">About us</a>
                <a href="#">Talent Agencies</a>
              </div>
            </div>
          </ul>
        </div>

        <div
          className="dropdown"
          style={{ "padding-left": "4em", "padding-top": "1em" }}
        >
          <button className="dropbtn">Login</button>
          <div class="dropdown-content">
            {/* <a href="/Popup">Recruiter
   </a> */}

            <Popup
              trigger={<a style={{ cursor: "pointer" }}> Recruiter</a>}
              model
              nested
            >
              {(close) => (
                <div>
                  <div className="popuprec">
                    <Logout1 />
                  </div>
                </div>
              )}
            </Popup>

            <Popup
              trigger={<a style={{ cursor: "pointer" }}> Artist </a>}
              model
              nested
            >
              {(close) => (
                <div>
                  <div className="popupart">
                    <Logout1 />
                  </div>
                </div>
              )}
            </Popup>

            <Popup
              trigger={<a style={{ cursor: "pointer" }}>Nirali</a>}
              model
              nested
            >
              {(close) => (
                <div>
                  <div className="popupadmin">
                    <Logout1 />
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>

      <div className="abt1">
        <h1 className="abtcon"> ABOUT US </h1>
        <p className="abtpara">
          "TALENT SEARCH" is a website beneficial for both the Artists in order
          to be hired as well as the Recruiters who want the best artists which
          are talented enough for their work to be done and whose eligibility
          meet their requirements. We are focused on providing all the artists
          recruitments so that they can showcase their talent to the world by
          connecting to various recruiters via our platform. Recruiters are also
          benefitted as they do not have to search thoroughly for the artists
          and just by creating multiple posts according to their requirements
          they can connect to artists. Interested artists can view all the posts
          and apply for the same.
          <br />
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            numquam exercitationem expedita rem nostrum ut pariatur autem
            nesciunt rerum voluptates quasi labore, dignissimos quibusdam veniam
            molestias hic vel blanditiis, delectus cupiditate atque provident
            adipisci similique ipsum est. Et eveniet aspernatur neque incidunt
            deleniti voluptatum saepe asperiores dolore obcaecati, cumque natus. */}
            Basically our main motto is to connect various artists and
            recruiters. They just have to clear the payments and then they can
            communicate with each other. Thus our website basically focus on the
            requirements of the Clients and we work accordingly their work of
            interests.
            <br />
            {/* <button className="abtbtn">Connect with us</button> */}
            <a href="Contact" className="abtbtn">
              {" "}
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgb(157, 237, 237)",
                  marginTop: "28px",
                  color: "black",
                }}
              >
                Connect with us
              </Button>
            </a>
          </p>
        </p>
      </div>

      {/* div-2 */}

  <div>
      <div >
        <h2 style={{ textAlign: "center", fontSize: "27px", padding: "20px" }}>
          Why us?
        </h2>
        <h2 style={{ textAlign: "center", fontSize: "24px" }}>
          Get to know about our website
        </h2>
      </div>

      <div className="abtdiv">
        <div className="abtdiv1">
          <p className="divp">
            <DoubleArrowIcon />{" "}
          </p>
          <h3 className="divh"> User friendly environment </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            accusantium officia consequatur nesciunt, sed eligendi corrupti
            numquam minima iure, ut vitae facilis at maxime perspiciatis. Sint
            deleniti sit, repellat culpa eveniet earum blanditiis libero cum
            nihil! Illo excepturi voluptate aspernatur laboriosam. Voluptas,
            amet at quod consequatur ea laborum illo odio? Users can freely post
            and
          </p>
        </div>

        <div className="abtdiv2">
          <p className="divp">
            <DoubleArrowIcon />
          </p>
          <h3 className="divh">
            {" "}
            Artists can find jobs in the area of their expertise{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            accusantium officia consequatur nesciunt, sed eligendi corrupti
            numquam minima iure, ut vitae facilis at maxime perspiciatis. Sint
            deleniti sit, repellat culpa eveniet earum blanditiis libero cum
            nihil! Illo excepturi voluptate aspernatur laboriosam. Voluptas,
            amet at quod consequatur ea laborum illo odio?
          </p>
        </div>

        <div className="abtdiv1">
          <p className="divp">
            <DoubleArrowIcon />
          </p>
          <h3 className="divh">Easy and liable process of interaction</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            accusantium officia consequatur nesciunt, sed eligendi corrupti
            numquam minima iure, ut vitae facilis at maxime perspiciatis. Sint
            deleniti sit, repellat culpa eveniet earum blanditiis libero cum
            nihil! Illo excepturi voluptate aspernatur laboriosam. Voluptas,
            amet at quod consequatur ea laborum illo odio?
          </p>
        </div>

        <div className="teamdiv">
          <div className="tdiv">
            <div>
              <AccountBoxIcon
                style={{ "font-size": "103px", "margin-left": "0.6em" }}
              />
            </div>
            <h2 className="abtname">Name</h2>
            <p className="abtname">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              delectus!
            </p>{" "}
          </div>

          <div className="tdiv">
            <div>
              <AccountBoxIcon
                style={{ "font-size": "103px", "margin-left": "0.6em" }}
              />
            </div>
            <h2 className="abtname">Name</h2>
            <p className="abtname">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              delectus!
            </p>{" "}
          </div>

          <div className="tdiv">
            <div>
              <AccountBoxIcon
                style={{ "font-size": "103px", "margin-left": "0.6em" }}
              />
            </div>
            <h2 className="abtname">Name</h2>
            <p className="abtname">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              delectus!
            </p>
          </div>

          <div className="tdiv">
            <div>
              <AccountBoxIcon
                style={{ "font-size": "103px", "margin-left": "0.6em" }}
              />
            </div>
            <h2 className="abtname">Name</h2>
            <p className="abtname">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              delectus!
            </p>{" "}
          </div>

          <div className="tdiv">
            <div>
              <AccountBoxIcon
                style={{ "font-size": "103px", "margin-left": "0.6em" }}
              />
            </div>
            <h2 className="abtname">Name</h2>
            <p className="abtname">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              delectus!
            </p>{" "}
          </div>
        </div>
</div>
        {/* teamdiv ends */}
      </div>

      <Footer />
    </div>
  );
}

export default About;
