import React from "react";
import Contact from "../../Components/Contact/Contact";
import Footer2 from "../../Components/Footer2/Footer2";
import Intro from "../../Components/Intro/Intro";
import Projects from "../../Components/Projects/Projects";
import AboutMe from "../../Components/AboutMe/AboutMe";

const Home = () => {
  return (
    <>
      <Intro />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;
