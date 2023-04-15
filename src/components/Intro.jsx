import React from "react";
import Typewriter from "typewriter-effect";
import { profilePic } from "../assets";
import { HiCheckBadge } from "react-icons/hi2";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Ripple from "./button/Ripple";

const Intro = () => {
  return (
    <section
      id="intro"
      data-section
      className="h-screen flex items-center   w-full"
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
          <span className="text-gray-200 w-full max-w-lg mx-auto block sm:text-sm text-[13px] leading-5  tracking-[1px] ">
            I'm a &nbsp;
            <span className="xs:w-[6rem] w-20 inline-block text-center ">
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
            &nbsp; Developer from Bangladesh. With two years of experience in
            web development, designing and developing user interfaces,
            developing dynamic and responsive web applications using web
            technologies.
          </span>
          <div
            className="
          flex items-center justify-center gap-3 py-4"
          >
            {/* <span className="w-6 h-6 bg-black border flex items-center justify-center rounded-full">
              <SiGmail className="text-white w-4 h-4 bg-slate-600" />
            </span> */}
            {/* <span className="w-6 h-6 bg-black border flex items-center justify-center rounded-full"> */}
            <SiGmail className="text-orange-700 w-5 h-5 bg-white" />
            {/* </span> */}
            {/* <span className="w-6 h-6 bg-black  flex items-center justify-center rounded-full">
              <SiGmail className="text-red w-4 h-4 bg-white" />
            </span> */}
            <SiLinkedin />
          </div>
          <a href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download">
            <Ripple className="text-white opacity-90 hover:opacity-100 transition-all border-white border py-2 px-3 rounded-sm">
              Download Resume
            </Ripple>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
