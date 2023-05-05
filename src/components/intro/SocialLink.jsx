import React from "react";
import { motion } from "framer-motion";

const SocialLink = ({ Social, index }) => {
  const socialVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: index * 0.25,
      },
    },
  };
  return (
    <motion.div variants={socialVariant}>
      <a href={Social.link} target="_blank">
        <Social.icon className="text-white text-lg mr-3 mt-1" />
      </a>
    </motion.div>
  );
};

export default SocialLink;
