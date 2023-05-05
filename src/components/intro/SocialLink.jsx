import React from "react";
import { motion } from "framer-motion";

const SocialLink = ({ Social, index }) => {
  const socialVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 } },
  };
  return (
    <motion.a
      variants={socialVariant}
      initial="hidden"
      animate="visible"
      href={Social.link}
      target="_blank"
    >
      <Social.icon className="text-white text-lg mr-3 mt-1" />
    </motion.a>
  );
};

export default SocialLink;
