import React from "react";
import Typewriter from "typewriter-effect";
import { profilePic } from "../assets";
import { HiCheckBadge } from "react-icons/hi2";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Ripple from "./button/Ripple";
// to-[#77a1fd]  from-[#4b52e4]

const Intro = () => {
  const icons = [SiGmail, SiLinkedin, BsGithub];
  return (
    <section
      id="intro"
      data-section
      className="h-screen flex items-center   w-full"
    >
      <div className="max-w-7xl w-full mx-auto ">
        {/* profile image  */}
        <div
          className=" mx-auto
          flex items-center "
        >
          <div className="  mx-auto w-[210px] h-[210px] object-cover border-unique flex items-center duration-[400ms] transition-all  border-[white] border-2 p-2 ">
            <span className="bg-gradient-to-t to-[#9b77fd]  from-[#455cc4]  w-full h-full inline-block border-unique transition-all">
              <img
                className="mx-auto w-full h-full object-cover border-unique"
                src={profilePic}
                alt="Profile-photo"
              />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 pt-3 pb-2">
          {/* <SiGmail className="icon" />
          <SiLinkedin className="icon" />
          <BsGithub className="icon" /> */}
          {icons.map((Icon) => (
            <Icon className="text-white text-lg mx-1" />
          ))}
        </div>
        {/* info  */}
        <div className="text-center">
          <div className="text-slate-200 font-semibold text-xl flex items-center justify-center pb-1">
            <span className="">Hi, I'm Munna Ahmed</span> &nbsp;
            <HiCheckBadge className="text-blue-500 " />
          </div>

          <span className="text-gray-200 w-full max-w-xl mx-auto  xs:text-sm text-[13px] leading-5 block tracking-[1px] pb-4 px-5">
            I'm a &nbsp;
            <span className="xs:w-[6rem] w-[5.8rem] inline-block text-center ">
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
                    // .typeString("<span class='typewriter '>Self-taught<span/>")
                    // .pauseFor(2000)
                    // .deleteAll()
                    .start();
                }}
              />
            </span>
            &nbsp; Developer from Bangladesh. I'm self-taught with experience in
            web development, designing and creating responsive and user-friendly
            websites.
          </span>

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
