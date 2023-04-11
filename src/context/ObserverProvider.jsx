import { createContext, useEffect, useRef, useState } from "react";

export const OBSERVER_CONTEXT = createContext(null);

const ObserverProvider = ({ children }) => {
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
      {children}
    </OBSERVER_CONTEXT.Provider>
  );
};

export default ObserverProvider;
