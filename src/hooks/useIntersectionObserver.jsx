import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = () => {
  const observerRef = useRef();
  const [activeSection, setActiveSection] = useState("");

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

  return { observerRef, activeSection, setActiveSection };
};

export default useIntersectionObserver;
