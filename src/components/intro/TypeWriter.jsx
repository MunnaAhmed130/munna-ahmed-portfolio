import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <Typewriter
      options={{ autoStart: true, loop: true, delay: 100 }}
      onInit={(typewriter) => {
        typewriter
          .typeString("<span class='typewriter'>MERN Stack Developer<span/>")
          .pauseFor(2000)
          .deleteAll()
          .typeString("<span class='typewriter'>Front-End Developer<span/>")
          .pauseFor(2000)
          .deleteAll()
          .typeString("<span class='typewriter'>React Developer<span/>")
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeWriter;
