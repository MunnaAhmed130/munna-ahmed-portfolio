import React, { useContext, useEffect, useState } from "react";
// import SkeletonProjects from "../../Skeletons/SkeletonProjects";
import { projects } from "../constant";
import { Link } from "react-router-dom";

const Projects = () => {
  const [project, setProject] = useState(null);

  return (
    <section data-section id="projects" className="bg-[#222222]">
      <div className="">
        <h2>Projects</h2>
        <div className="">
          {projects.map((project) => (
            <Project project={project} key={project._id}></Project>
          ))}
        </div>

        {/* {!projects && (
          <div xl={3} lg={2} md={1} sm={1} className="">
            {[1, 2, 3].map((n) => (
              <SkeletonProjects key={n} />
            ))}
          </div>
        )} */}
      </div>
      {/* <Footer /> */}
    </section>
  );
};

const Project = ({ project }) => {
  const { description, project_img, title, _id } = project;
  const info = description.slice(0, 170);
  return (
    <div xl={4} lg={6} className="">
      <div className="">
        <img className="" src={project_img} alt="" />
        <h4 className="">{title}</h4>
        <p className="description">{info}...</p>
        <Link to={`/details/${_id}`}>
          <button variant="contained" className="mb-3">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
