import React from "react";
import Ripple from "../button/Ripple";

const ProjectButton = ({ repo, title }) => {
  const handleClient = (repo, time) => {
    setTimeout(() => {
      window.open(repo, "_blank");
    }, time);
  };

  return (
    <a target="_blank" onClick={() => handleClient(repo, 200)}>
      <Ripple className="text-white uppercase text-xs tracking-widest px-4 py-2 border border-white/5 rounded-sm bg-[#080808] hover:shadow-lg hover:shadow-black/40 transition-shadow duration-300 ease-out">
        {title}
      </Ripple>
    </a>
  );
};

export default ProjectButton;
