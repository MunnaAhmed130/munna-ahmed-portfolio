import React from "react";

const Dot = ({ className }) => {
  return (
    <span
      className={` ${className} xl:w-2 xl:h-2 lg:w-[7px] lg:h-[7px] md:w-1.5 md:h-1.5 w-[5px] h-[5px]  inline-block rounded-full bg-[white]  text-blue`}
    />
  );
};

export default Dot;
