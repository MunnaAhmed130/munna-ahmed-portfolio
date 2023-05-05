import React from "react";
import { profilePic } from "../../assets";
import { HiCheckBadge } from "react-icons/hi2";
import { icons, skills } from "../../utils/constant";
import { styles } from "../../styles";
import Skill from "./Skill";
import SocialLink from "./SocialLink";
import TypeWriter from "./TypeWriter";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section
      className={`overflow-hidden flex  xs:items-center items-start justify-around w-full ${styles.sectionHeight} min-h-[500px] `}
    >
      <div className="max-w-7xl w-full flex flex-row mx-auto ">
        <div className="max-w-2xl w-full  my-10 sm:mx-10 sm:px-10 px-0 mx-5">
          <div className="flex items-center justify-start xs:gap-5 gap-3">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0, delay: 0.2 }}
              className="rounded-full object-cover  flex items-center duration-[400ms] transition-all  border-[#ffffff] "
            >
              <img
                className="mx-auto bg-gradient-to-t to-[#668fff] via-[#8f79f0]  from-[#6b4cf1] sm:w-28 sm:h-28 xs:w-24 xs:h-24 w-20 h-20 object-cover rounded-full "
                src={profilePic}
                alt="Profile-photo"
              />
            </motion.div>
            <motion.div
            // initial={{ x: 150, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{
            //   type: "spring",
            // }}
            >
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                }}
                className="sm:text-2xl xs:text-xl text-base flex items-center justify-start "
              >
                <p className="text-white inline-block font-semibold tracking-wide">
                  Munna Ahmed
                </p>
                &nbsp;
                <HiCheckBadge className="text-blue-500" />
              </motion.div>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.15,
                }}
              >
                <TypeWriter />
              </motion.div>

              <motion.div className="flex items-start justify-start ">
                {icons.map((Social, index) => (
                  <SocialLink Social={Social} index={index} key={Social.link} />
                ))}
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-slate-100 xs:text-base text-sm my-14 tracking-wider max-w-lg"
          >
            Hi, I'm a React Developer. I'm Self-taught and passionate about web
            development, designing, and creating responsive and user-friendly
            websites.
          </motion.div>
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // transition={{ delay: 0.1 }}
              className="text-white sm:text-lg xs:text-lg text-base uppercase tracking-wider font-semibold"
            >
              Skills
            </motion.p>
            <div className="grid xs:grid-cols-3 grid-cols-2 gap-5 mt-4">
              {skills.map((skill, index) => (
                <Skill skill={skill} index={index} key={skill.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
