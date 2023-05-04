import React from "react";
import { motion } from "framer-motion";

const Skill = ({ skill, index }) => {
  // console.log(skill, index);
  const skillVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      delay: 5,
      transition: {
        type: "spring",
        delay: index * 0.15,
      },
    },
  };
  return (
    <motion.div
      variants={skillVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center gap-2 h-full"
    >
      <img src={skill.icon} className={` w-6 h-6 m-0 `} />
      <span className="text-white sm:text-base text-sm tracking-wider">
        {skill.title}
      </span>
    </motion.div>
  );
};

export default Skill;
