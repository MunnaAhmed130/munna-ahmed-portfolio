import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="flex flex-row items-center gap-2 h-full">
      <img src={skill.icon} className={` w-6 h-6 m-0 `} />
      <span className="text-white sm:text-base text-sm tracking-wider">
        {skill.title}
      </span>
    </div>
  );
};

export default Skill;
