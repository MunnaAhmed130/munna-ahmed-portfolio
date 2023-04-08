import React, { useEffect, useState } from "react";
import SkeletonProjects from "../../Skeletons/SkeletonProjects";
import Footer from "../Footer/Footer";
import Project from "../Project/Project";
import "./Projects.css";

const Projects = () => {
  const [project, setProject] = useState(null);
  // const [success, setSuccess] = useState(false)
  useEffect(() => {
    const Url = `fakedata.json`;
    fetch(Url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  console.log(project);

  return (
    <div id="projects">
      <div className="projects-container ">
        <h2>Projects</h2>
        {/* <SkeletonElement type="avatar" /> */}
        {/* <Spinner animation="border" /> */}
        {project && (
          <div className="projects">
            {project.map((project) => (
              <Project project={project} key={project._id}></Project>
            ))}
          </div>
        )}
        {/* {
                    !project && <div className='spin' > <Spinner animation="border" /></div>
                } */}
        {!project && (
          <div xl={3} lg={2} md={1} sm={1} className="projects">
            {[1, 2, 3].map((n) => (
              <SkeletonProjects key={n} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
