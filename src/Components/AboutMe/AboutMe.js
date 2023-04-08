import React from "react";
import Particles from "react-tsparticles";
import "./AboutMe.css";

const AboutMe = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section className="about-section">
      <Particles
        id="tsparticles"
        className="particles-about"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#1D1C1C",
              // value: "none"
            },
          },
          fpsLimit: 160,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 1,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            // fullScreen: false,
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 110,
              enable: true,
              opacity: 1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 10,
              },
            },
            // line_linked: {
            //     enable: true,
            //     distance: 120
            // },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="about-info--container">
        <h2>HI</h2>
        <h2>I'm Munna Ahmed</h2>
        <p>
          I am a Junior Web Developer/React Web Developer from bangladesh. I
          have one plus year of experience in web development, designing and
          developing user interfaces, testing, and debugging. Web Development
          and Design is my passion.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
