import { createContext, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

export const OBSERVER_CONTEXT = createContext();

const App = () => {
  const observerRef = useRef();
  const [activeSection, setActiveSection] = useState("");
  // console.log(activeSection);
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;

      // Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observerRef.current.observe(section);
    });

    // Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observerRef.current.unobserve(section);
      });
    };
  }, [observerRef]);

  const value = { observerRef, activeSection, setActiveSection };
  return (
    <OBSERVER_CONTEXT.Provider value={value}>
      <RouterProvider router={routes} />
    </OBSERVER_CONTEXT.Provider>
  );
};

export default App;
