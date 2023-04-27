import React from "react";

const SocialLink = ({ Social }) => {
  return (
    <a href={Social.link} target="_blank">
      <Social.icon className="text-white text-lg mr-3 mt-1" />
    </a>
  );
};

export default SocialLink;
