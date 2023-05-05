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
        // when: ""
        // delayChildren: 2,
      },
    },
  };

  const ballVariant = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        // delay: index * 0.2,
        delay: index * 0.25,

        stiffness: 100,
        // when: ""
        // delayChildren: 2,
      },
    },
  };
  return (
    <motion.div variants={skillVariants} initial="hidden" animate="visible">
      <div className="flex flex-row items-center gap-2 h-full">
        {/* <img src={skill.icon} className={` w-6 h-6 m-0 `} /> */}
        <motion.div
          variant={ballVariant}
          initial="hidden"
          animate="visible"
          className="h-6 w-6"
        >
          <BallCanvas icon={skill.icon} />
        </motion.div>
        <span className="text-white sm:text-base text-sm tracking-wider">
          {skill.title}
        </span>
      </div>
    </motion.div>
  );
};

export default Skill;
