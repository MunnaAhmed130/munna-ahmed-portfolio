import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { profilePic } from "../assets";
import { HiCheckBadge } from "react-icons/hi2";

const Intro = () => {
  const writerStyle = "text-gray-100";
  return (
    <section
      id="intro"
      data-section
      className="h-screen flex items-center  bg-[#222222] w-full"
    >
      <div className="max-w-7xl w-full mx-auto ">
        {/* profile image  */}
        <div
          className="h-72 w-72 mx-auto
          flex items-center"
        >
          <div className=" hover:w-64 hover:h-64 mx-auto w-[210px] h-[210px] object-cover border-unique flex items-center duration-[400ms] transition-all  border-[white] border-2 p-2 hover:p-0">
            <img
              className="bg-gradient-to-t to-[#77a1fd]  from-[#4b52e4] transition-all mx-auto w-full h-full object-cover border-unique    "
              src={profilePic}
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
          {/* <div className="h-6 flex items-center justify-center  text-lg mx-auto">
            <span className="text-white">I am a</span>&nbsp;
            <Typewriter
              options={{ autoStart: true, loop: true, delay: 100 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("<span class='typewriter '>Web Developer<span/>")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("<span class='typewriter'>React Developer<span/>")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "<span class='typewriter '>Front End Developer<span/>"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div> */}
          {/* <h3 className="title">Junior web developer</h3> */}
          <p className="text-gray-200 w-full max-w-lg mx-auto text-sm leading-5 mb-5">
            {/* I'm Junior Web Developer with one year of experience in web
            development, designing and developing user interfaces, and
            debugging. Experienced in developing dynamic and responsive web
            applications using web technologies like Html, CSS, Bootstrap, and
            Javascript. */}
            {/* &nbsp;
            <span className="bg-white px-2 rounded-lg leading-[1]">
              <span className="text-green-500">M</span>
              <span className="text-black">E</span>
              <span className="text-blue-500">R</span>
              <span>N</span>
            </span>
            &nbsp;
             */}
            I'm a MERN stack developer with one year of experience in web
            development, designing and developing user interfaces, and
            debugging. Experienced in developing dynamic and responsive web
            applications using web technologies like Html, CSS, Bootstrap, and
            Javascript.
          </p>
          <button
            className="text-white "
            href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download"
          >
            {/* <FontAwesomeIcon icon={faDownload} className="me-2" /> */}
            Download Resume
          </button>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Intro;
