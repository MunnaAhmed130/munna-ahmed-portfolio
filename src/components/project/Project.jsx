import React from "react";
import { Tilt } from "react-tilt";
import ImageLoading from "./ImageLoading";
import ProjectButton from "./ProjectButton";
import { motion } from "framer-motion";

const Project = ({ project, index }) => {
  const {
    description,
    project_img,
    title,
    _id,
    tags,
    client_repo,
    server_repo,
    live_link,
  } = project;

  // console.log(tags);
  const info = description.slice(0, 120);

  const imgOptions = {
    reverse: true,
    max: 10,
    perspective: 1000,
    scale: 1,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.1,1,.1,.99)",
  };

  const cardOptions = {
    reverse: true,
    max: 10,
    perspective: 1000,
    scale: 1,
    speed: 100,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.1,1,.1,.99)",
  };

  // const bgImg = `bg-[url(${project_img})]`;
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.2 }}
      className="mx-auto"
    >
      <Tilt options={cardOptions}>
        <div className="relative border border-white/[0] rounded-sm p-3 md:max-w-full max-w-sm bg-[rgba(255,255,255,0.2)]">
          <Tilt options={imgOptions}>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="w-full  relative  overflow-hidden mb-2"
            >
              <a href={live_link} target="_blank" className="relative block">
                <ImageLoading image={project_img} className="overflow-hidden" />
                <div className="absolute inset-0 w-full h-auto hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 font-bold z-10">
                  <span className="uppercase text-white tracking-widest">
                    Live Site
                  </span>
                </div>
              </a>
            </motion.div>
          </Tilt>
          {/* {tags?.map((tag) => (
            <span className={` text-sm mr-2 ${tag.color}`}>#{tag.title}</span>
          ))} */}
          <div className="mt-1">
            <h4 className="text-white font-semibold text-[19px]">{title}</h4>
            <p className="text-slate-200 text-sm tracking-wider">{info}...</p>
            <div className="flex flex-row items-center justify-center gap-5 mt-4">
              <ProjectButton repo={client_repo} title="Client" />
              <ProjectButton repo={server_repo} title="Server" />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Project;
