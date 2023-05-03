import React from "react";
import { profilePic } from "../../assets";
import { HiCheckBadge } from "react-icons/hi2";
import { icons, skills } from "../../utils/constant";
import { styles } from "../../styles";
import Skill from "./Skill";
import SocialLink from "./SocialLink";
import TypeWriter from "./TypeWriter";

const Intro = () => {
  return (
    <section
      className={`overflow-hidden flex  xs:items-center items-start justify-around w-full ${styles.sectionHeight} min-h-[500px] `}
    >
      <div className="max-w-7xl w-full flex flex-row mx-auto ">
        <div className="max-w-2xl w-full  my-10 sm:mx-10 sm:px-10 px-0 mx-5">
          <div className="flex items-center justify-start xs:gap-5 gap-3">
            <div className="rounded-full object-cover  flex items-center duration-[400ms] transition-all  border-[#ffffff]">
              <img
                className="mx-auto bg-gradient-to-t to-[#668fff] via-[#8f79f0]  from-[#6b4cf1] sm:w-28 sm:h-28 xs:w-24 xs:h-24 w-20 h-20 object-cover rounded-full "
                src={profilePic}
                alt="Profile-photo"
              />
            </div>
            <div>
              <div className="sm:text-2xl xs:text-xl text-base flex items-center justify-start ">
                <p className="text-white inline-block font-semibold tracking-wide">
                  Munna Ahmed
                </p>
                &nbsp;
                <HiCheckBadge className="text-blue-500" />
              </div>

              <TypeWriter />

              <div className=" flex items-start justify-start ">
                {icons.map((Social) => (
                  <SocialLink Social={Social} key={Social.link} />
                ))}
              </div>
            </div>
          </div>
          <p className="text-slate-100 xs:text-base text-sm my-14 tracking-wider max-w-lg">
            Hi, I'm a React Developer. I'm Self-taught and passionate about web
            development, designing, and creating responsive and user-friendly
            websites.
          </p>
          <div>
            <p className="text-white sm:text-lg xs:text-lg text-base uppercase tracking-wider font-semibold">
              Skills
            </p>
            <div className="grid xs:grid-cols-3 grid-cols-2 gap-5 mt-4">
              {skills.map((skill) => (
                <Skill skill={skill} key={skill.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
