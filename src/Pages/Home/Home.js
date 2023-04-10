import { useEffect, useRef, useState } from "react";
import Contact from "../../Components/Contact/Contact";
import Intro from "../../Components/Intro/Intro";
import Projects from "../../Components/Projects/Projects";
import AboutMe from "../../Components/AboutMe/AboutMe";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const observerRef = useRef();
  const [activeSection, setActiveSection] = useState();

  useEffect(() => {
    console.log("observer", observerRef.current);
    //create new instance and pass a callback function
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      // const visibleSection = entries.find(
      //   (entry) => entry.isIntersecting
      // )?.target;
      //Update state with the visible section ID
      // if (visibleSection) {
      //   setActiveSection(visibleSection.id);
      //   console.log(visibleSection);
      // }
    });
    observer.current && observer.observe(observerRef.current);
    //Get custom attribute data-section from all sections
    // const sections = document.querySelectorAll("[data-section]");

    // sections.forEach((section) => {
    //   observer.current.observe(section);
    // });
    //Cleanup function to remove observer
    // return () => {
    //   sections.forEach((section) => {
    //     observer.current.unobserve(section);
    //   });
    // };
  }, [observerRef]);

  return (
    <div className="">
      <Intro />
      <Projects observerRef={observerRef} />
      <AboutMe />
      <Contact observerRef={observerRef} />
      <Footer />
    </div>
  );
};

export default Home;
