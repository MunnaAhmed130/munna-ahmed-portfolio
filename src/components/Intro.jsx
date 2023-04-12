import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { profilePic } from "../assets";
import { HiCheckBadge } from "react-icons/hi2";

const Intro = () => {
  return (
    <section
      id="intro"
      data-section
      className="h-screen flex items-center   w-full z-[1]"
    >
      <div className="max-w-7xl w-full mx-auto ">
        {/* profile image  */}
        <div
          className="h-72 w-72 mx-auto
          flex items-center "
        >
          <div className=" hover:w-64 hover:h-64 mx-auto w-[210px] h-[210px] object-cover border-unique flex items-center duration-[400ms] transition-all  border-[white] border-2 p-2 hover:p-0">
            <img
              className="bg-gradient-to-t to-[#77a1fd]  from-[#4b52e4] transition-all mx-auto w-full h-full object-cover border-unique    "
              src={profilePic}
              onMouseOver={() => console.log("fast")}
              alt="Profile-photo"
            />
          </div>
        </div>
        {/* info  */}
        <div className="text-center">
          <div className="text-slate-200 font-semibold text-xl flex items-center justify-center pb-1">
            <span>Hi, I'm Munna Ahmed</span> &nbsp;
            <HiCheckBadge className="text-blue-500 " />
          </div>
          <span className="text-gray-200 w-full max-w-lg mx-auto block text-sm leading-5 mb-5 ">
            I'm a &nbsp;
            <span className="w-[5.625rem] inline-block text-center ">
              <Typewriter
                options={{ autoStart: true, loop: true, delay: 100 }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("<span class='typewriter '>MERN Stack<span/>")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("<span class='typewriter'>Front-End<span/>")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("<span class='typewriter '>React<span/>")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
            &nbsp; Developer with one year of experience in web development,
            designing and developing user interfaces, and debugging. Experienced
            in developing dynamic and responsive web applications using web
            technologies like Html, CSS, Bootstrap, and Javascript.
          </span>
          <button
            className="text-white opacity-90 hover:opacity-100 transition-all "
            href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download"
          >
            Download Resume
          </button>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Intro;
