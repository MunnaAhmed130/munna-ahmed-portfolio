import React from "react";
// import Particles from "react-tsparticles";
// import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Intro.css";
// import { Button } from "@mui/material";
// import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
import { profilePic } from "../../assets";

const Intro = () => {
  //   const particlesInit = (main) => {
  //     console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  //   };

  //   const particlesLoaded = (container) => {
  // console.log(container);
  //   };
  return (
    <div className="intro">
      <div style={{ width: "100%" }} className="intro-row">
        <div lg={5} md={12} className="left">
          <div className="profile-img-container">
            {/* <Fade left> */}
            <img
              className="profile-img"
              // src="https://i.ibb.co/yhFgYJ9/received-641280323297589.jpg"
              src={profilePic}
              alt=""
            />
            {/* </Fade> */}
          </div>
        </div>
        <div lg={7} md={12} className="right">
          <div className="profile-info">
            <div>
              <h1>Munna Ahmed</h1>
              <div className="title">
                <Typewriter
                  options={{ autoStart: true, loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Junior Web Developer")
                      // .callFunction(() => {
                      //     console.log('String typed out!');
                      // })
                      .pauseFor(2000)
                      .deleteAll()
                      // .callFunction(() => {
                      //     console.log('All strings were deleted');
                      // })
                      .typeString("Junior React Developer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Front End Developer")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              {/* <h3 className="title">Junior web developer</h3> */}
              <p>
                I'm Junior Web Developer with one year of experience in web
                development, designing and developing user interfaces, and
                debugging. Experienced in developing dynamic and responsive web
                applications using web technologies like Html, CSS, Bootstrap,
                and Javascript.{" "}
              </p>
              <button
                variant="contained"
                className="download-btn"
                href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download"
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" /> Download
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
