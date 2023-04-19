import React from "react";
import Typewriter from "typewriter-effect";
import { profilePic } from "../assets";
import { HiCheckBadge } from "react-icons/hi2";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { skills } from "../constant";
import { styles } from "../styles";

// to-[#77a1fd]  from-[#4b52e4]
// sm:h-[calc(100vh-92px)]
const Intro = () => {
  const icons = [SiGmail, SiLinkedin, BsGithub];
  // const skills = [
  //   { icon: javascript, title: "JavaScript" },
  //   { icon: css3, title: "CSS3" },
  //   { icon: html5, title: "HTML5" },
  //   { icon: tailwindCSS, title: "Tailwind CSS" },
  //   { icon: react, title: "ReactJS" },
  //   { icon: express, title: "ExpressJS" },
  // ];

  // const introMargin = "2xl:mt-44 xl:mt-36 lg:mt-32 md:mt-28 sm:mt-16 xs:mt-4";
  return (
    <section
      id="intro"
      data-section
      className={` flex  xs:items-center items-start justify-around w-full ${styles.sectionHeight} min-h-[500px] `}
    >
      <div className="max-w-5xl w-full mx-auto sm:px-20 xs:px-10 my-10 px-5 ">
        <div className="max-w-2xl">
          <div className="flex items-center justify-start xs:gap-5 gap-3">
            <div className="rounded-full object-cover  flex items-center duration-[400ms] transition-all  border-[#ffffff]">
              <img
                className="mx-auto bg-gradient-to-t to-[#9b77fd]  from-[#455cc4] sm:w-28 sm:h-28 xs:w-24 xs:h-24 w-20 h-20 object-cover rounded-full border-unique"
                src={profilePic}
                alt="Profile-photo"
              />
            </div>
            <div>
              <div className=" sm:text-2xl xs:text-xl text-base flex items-center justify-start ">
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
                    .typeString(
                      "<span class='typewriter'>React Developer<span/>"
                    )
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
          <p className="text-slate-100 xs:text-base text-sm my-14 tracking-wider max-w-lg">
            Hi, I'm a React Developer, self-taught with experience in web
            development, designing and creating responsive and user-friendly
            websites.
          </p>
          <div>
            <p className="text-white text-xl uppercase">Skills</p>
            <div className="grid xs:grid-cols-3 grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div className=" inline-block mt-5  " key={skill.title}>
                  <div className="flex items-center gap-2">
                    <img src={skill.icon} className={` w-6 h-6 m-0 `} />
                    <span className="text-white sm:text-base text-sm">
                      {skill.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
