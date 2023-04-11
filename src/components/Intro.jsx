import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { profilePic } from "../assets";

const Intro = () => {
  const writerStyle = "text-gray-100";
  return (
    <div
      id="intro"
      data-section
      className="h-screen flex items-center mb-5 bg-[#222222] w-full"
    >
      <div className="flex flex-col max-w-7xl w-full mx-auto gap-2">
        <div className="">
          <div className="">
            {/* <Fade left> */}
            <img
              className="bg-gradient-to-t from-blue-500 to-purple-400 mx-auto w-40 h-40 object-cover rounded-full"
              // src="https://i.ibb.co/yhFgYJ9/received-641280323297589.jpg"
              src={profilePic}
              alt=""
            />
            {/* </Fade> */}
          </div>
        </div>
        <div className="">
          <div className="profile-info">
            <div className="text-center">
              <p className="text-slate-500 font-semibold">
                Hi, I'm Munna Ahmed
              </p>
              <div className="h-6 flex items-center justify-center">
                <Typewriter
                  options={{ autoStart: true, loop: true, delay: 100 }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span class='text-gray-400 font-bold text-sm'>Junior Web Developer<span/>"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString(
                        "<span class='text-gray-400 font-semibold text-sm'>Junior React Developer<span/>"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString(
                        "<span class='text-gray-400 font-semibold text-sm'>Front End Developer<span/>"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              {/* <h3 className="title">Junior web developer</h3> */}
              <p className="text-gray-500 w-full max-w-lg mx-auto font-semibold">
                I'm Junior Web Developer with one year of experience in web
                development, designing and developing user interfaces, and
                debugging. Experienced in developing dynamic and responsive web
                applications using web technologies like Html, CSS, Bootstrap,
                and Javascript.
              </p>
              <button
                variant="contained"
                className="download-btn"
                href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download"
              >
                {/* <FontAwesomeIcon icon={faDownload} className="me-2" /> */}
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
