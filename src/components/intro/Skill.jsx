import React from "react";
import { motion } from "framer-motion";
import BallCanvas from "../canvas/BallCanvas";

const Skill = ({ skill, index }) => {
  // console.log(skill, index);
  const skillVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: index * 0.2,
        // when: "beforeChildren",
        // delayChildren: 2,
      },
    },
  };

  const ballVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: index * 0.2,
        stiffness: 70,
      },
    },
  };
  return (
    <motion.div variants={skillVariants} initial="hidden" animate="visible">
      <div className="flex flex-row items-center gap-2 h-full">
        <motion.div variants={ballVariant}>
          <img src={skill.icon} className=" w-6 h-6 m-0 " />
          {/* <BallCanvas icon={skill.icon} /> */}
        </motion.div>
        <span className="text-white sm:text-base text-sm tracking-wider">
          {skill.title}
        </span>
      </div>
    </motion.div>
  );
};

export default Skill;
