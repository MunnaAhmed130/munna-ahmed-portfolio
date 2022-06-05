import React from "react";
import Particles from "react-tsparticles";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Intro.css";
import { Button } from "@mui/material";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="header">
      <Particles
        id="tsparticles"
        className="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#1D1C1C",
              // value: "none"
            },
          },
          fpsLimit: 160,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 1,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            // fullScreen: false,
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 110,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 10,
              },
            },
            // line_linked: {
            //     enable: true,
            //     distance: 120
            // },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      {/* <Row style={{ width: '100%' }} className="intro-row">
                    <Col lg={5} md={12} className="left">
                        <div className="profile-img-container">
                            <Fade left>
                                <img className="profile-img" src="https://i.ibb.co/yhFgYJ9/received-641280323297589.jpg" alt="" />
                            </Fade>
                        </div></Col>
                    <Col lg={7} md={12} className="right">
                        <div className="profile-info">
                            <div>
                                <h1>Munna Ahmed</h1>
                                <h3 className="title">Junior web developer</h3>
                                <p>Junior Web Developer with one year of experience in web development, designing and developing user  interfaces, and debugging. Experienced in developing dynamic and responsive web applications  using web technologies like Html, CSS, Bootstrap, and Javascript. </p>
                                <Button variant='contained' className="download-btn" href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download" ><FontAwesomeIcon icon={faDownload} className="me-2" /> Download Resume</Button>
                            </div>
                        </div>
                    </Col>
                </Row> */}
      {/* </Particles> */}
      <Row style={{ width: "100%" }} className="intro-row">
        <Col lg={5} md={12} className="left">
          <div className="profile-img-container">
            <Fade left>
              <img
                className="profile-img"
                src="https://i.ibb.co/yhFgYJ9/received-641280323297589.jpg"
                alt=""
              />
            </Fade>
          </div>
        </Col>
        <Col lg={7} md={12} className="right">
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
              <Button
                variant="contained"
                className="download-btn"
                href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download"
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" /> Download
                Resume
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
