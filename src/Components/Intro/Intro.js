import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Intro.css";
import Typewriter from "typewriter-effect";
import { profilePic } from "../../assets";

const Intro = () => {
  return (
    <div id="intro" data-section className="py-40 bg-[#222222] w-full">
      <div className="flex flex-row max-w-7xl w-full mx-auto gap-10">
        <div className="">
          <div className="profile-img-container">
            {/* <Fade left> */}
            <img
              className="bg-gradient-to-t from-slate-500 to-slate-300 grayscale w-40 h-40 object-cover rounded-full"
              // src="https://i.ibb.co/yhFgYJ9/received-641280323297589.jpg"
              src={profilePic}
              alt=""
            />
            {/* </Fade> */}
          </div>
        </div>
        <div className="right">
          <div className="profile-info">
            <div>
              <h1>Munna Ahmed</h1>
              <div className="h-6 flex items-center justify-center">
                <Typewriter
                  options={{ autoStart: true, loop: true, delay: 100 }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span class='text-gradient font-semibold text-xl'>Junior Web Developer<span/>"
                      )
                      // .callFunction(() => {
                      //     console.log('String typed out!');
                      // })
                      .pauseFor(2000)
                      .deleteAll()
                      // .callFunction(() => {
                      //     console.log('All strings were deleted');
                      // })
                      .typeString(
                        "<span class='text-gradient font-semibold text-xl'>Junior React Developer<span/>"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString(
                        "<span class='text-gradient font-semibold text-xl'>Front End Developer<span/>"
                      )
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              {/* <h3 className="title">Junior web developer</h3> */}
              <p className="">
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
