import React from "react";
import { Tilt } from "react-tilt";
import Ripple from "./button/Ripple";
import ImageLoading from "./ImageLoading";

const Project = ({ project }) => {
  const {
    description,
    project_img,
    title,
    _id,
    client_repo,
    server_repo,
    live_link,
  } = project;

  const info = description.slice(0, 120);

  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.1,1,.1,.99)", // Easing on enter/exit.
  };

  const handleClient = (repo, time) => {
    setTimeout(() => {
      window.open(repo, "_blank");
    }, time);
  };
  const imgBefore =
    "before:content-[''] before:inset-0 before:absolute before:w-full before:h-full before:bg-white before:z-10 hover:before:";

  // const bgImg = `bg-[url(${project_img})]`;
  return (
    <div className="mx-auto">
      <Tilt options={defaultOptions}>
        <div className="relative border border-white/[0] rounded-sm p-3 md:max-w-full max-w-sm bg-[rgba(255,255,255,0.15)]">
          <div className="w-full  relative  overflow-hidden">
            <a href={live_link} target="_blank" className="relative">
              {/* <img
                className="project-img  w-full xl:h-56 h-56 object-cover object-top  overflow-hidden "
                loading="lazy"
                src={project_img}
                alt={`${title}-homepage`}
              /> */}
              <ImageLoading image={project_img} className="overflow-hidden" />
              <div className="absolute inset-0 w-full h-full hover:bg-black/70 transition-all duration-300 text-white flex items-center justify-center opacity-0 hover:opacity-100 font-bold z-10">
                Live Site
              </div>
            </a>
            {/* <a href={client_repo} target="_blank">
              <BsGithub className="absolute top-0 right-0  text-white bg-[#222222] xl:w-10 xl:h-10 md:w-10 md:h-10 lg:w-9 lg:h-9 w-9 h-9 p-2 xl:m-3 m-2 rounded-full z-10" />
            </a> */}
          </div>
          <div className="mt-3">
            <h4 className="text-white font-semibold text-[19px]">{title}</h4>
            <p className="text-slate-200 text-sm tracking-wider">{info}...</p>
            <div className="flex flex-row items-center justify-center gap-5 mt-4">
              <a target="_blank" onClick={() => handleClient(client_repo, 200)}>
                <Ripple className="text-white uppercase text-xs tracking-widest px-4 py-2 border border-white/5 rounded-sm bg-[#080808] hover:shadow-md hover:shadow-white transition-shadow duration-300 ease-out">
                  client
                </Ripple>
              </a>
              <a target="_blank" onClick={() => handleClient(server_repo, 200)}>
                <Ripple className="text-white uppercase text-xs tracking-widest px-4 py-2 border border-white/5 rounded-sm bg-black hover:shadow-md hover:shadow-black transition-shadow duration-300 ease-out ">
                  server
                </Ripple>
              </a>
            </div>
          </div>

          {/* <img
              src={project_img}
              className={`absolute inset-0 w-full h-full bg-cover opacity-20 grayscale z-[-1]`}
              alt=""
            /> */}
          {/* <div
              className={`absolute inset-0  bg-[url('https://img.freepik.com/free-photo/background-gradient-lights_23-2149304983.jpg?w=740&t=st=1682414541~exp=1682415141~hmac=ee6c407f763145ed1a5087fadfc29cf8eeddbbc5f03295c207b562f5642dacfd')]   w-full   z-[-1]t  `}
            /> */}
        </div>
      </Tilt>
    </div>
  );
};

export default Project;
