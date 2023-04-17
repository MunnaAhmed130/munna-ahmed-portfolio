import React from "react";
import Typewriter from "typewriter-effect";
import { profilePic } from "../assets";
import { HiCheckBadge } from "react-icons/hi2";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Ripple from "./button/Ripple";
import { css3, html5, javascript } from "../assets/icons";
// to-[#77a1fd]  from-[#4b52e4]

const Intro = () => {
  const icons = [SiGmail, SiLinkedin, BsGithub];
  const skills = [
    { icon: javascript, title: "JavaScript" },
    { icon: css3, title: "CSS3" },
    { icon: html5, title: "HTML5" },
  ];

  return (
    <section
      id="intro"
      data-section
      className="h-[calc(100vh_-_28px)] flex items-center w-full"
    >
      {/* <div className="max-w-7xl w-full mx-auto ">
        <div
          className=" mx-auto
          flex items-center "
        >
          <div className="rounded-full  mx-auto w-[210px] h-[210px] object-cover  flex items-center duration-[400ms] transition-all  border-[white] border-2 p-2 ">
            <span className="bg-gradient-to-t to-[#9b77fd]  from-[#455cc4]  w-full h-full inline-block rounded-full transition-all">
              <img
                className="mx-auto w-full h-full object-cover rounded-full"
                src={profilePic}
                alt="Profile-photo"
              />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 pt-3 pb-2">
          {icons.map((Icon) => (
            <Icon className="text-white text-lg mx-1" />
          ))}
        </div>

        <div className="text-center">
          <div className=" text-xl flex items-center justify-center pb-1">
            <span className="text-white font-semibold">
              Hi, I'm Munna Ahmed
            </span>{" "}
            &nbsp;
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
      </div> */}
      <div className="max-w-5xl w-full  mx-auto px-20">
        <div className="flex items-center justify-start gap-5">
          <div className="rounded-full  sm:w-28 sm:h-28 w-24 h-24 object-cover  flex items-center duration-[400ms] transition-all  border-[#ffffff]   p-1">
            <span className="bg-gradient-to-t to-[#9b77fd]  from-[#455cc4]  w-full h-full inline-block rounded-full transition-all">
              <img
                className="mx-auto w-full h-full object-cover rounded-full"
                src={profilePic}
                alt="Profile-photo"
              />
            </span>
          </div>
          <div>
            <div className=" sm:text-2xl text-xl flex items-center justify-start ">
              <p className="text-white inline-block">Munna Ahmed</p>
              &nbsp;
              <HiCheckBadge className="text-blue-500" />
            </div>
            <Typewriter
              options={{ autoStart: true, loop: true, delay: 100 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "<span class='typewriter'>MERN Stack Developer<span/>"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(
                    "<span class='typewriter'>Front-End Developer<span/>"
                  )
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("<span class='typewriter'>React Developer<span/>")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
            <div className=" flex items-start justify-start ">
              {icons.map((Icon) => (
                <button>
                  <Icon className="text-white text-lg mr-3 mt-1" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="text-white my-14 tracking-wider max-w-xl">
          Hi, I'm a React Developer, self-taught with experience in web
          development, designing and creating responsive and user-friendly
          websites.
        </p>
        <div>
          <p className="text-white text-xl  uppercase">Skills</p>
          <div>
            {skills.map((skill) => (
              <div
                className="inline-block border mt-5 border-slate-500 border-collapse w-40"
                key={skill.title}
              >
                <img src={skill.icon} className="w-10 h-10 inline-block p-1" />
                <span className="text-white">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
