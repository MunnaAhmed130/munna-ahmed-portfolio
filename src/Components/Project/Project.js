import React from "react";
import { Link } from "react-router-dom";
// // import Button from '@mui/material/Button';
// import SkeletonElement from "../../Skeletons/SkeletonElement";
// import SkeletonProjects from "../../Skeletons/SkeletonProjects";
import "./Project.css";
// import { Fade } from 'react-reveal';

const Project = ({ project }) => {
  const { description, project_img, title, _id } = project;
  const info = description.slice(0, 170);
  return (
    <div xl={4} lg={6} className="project-container-col">
      <div className="project-container">
        <img className="project-img " src={project_img} alt="" />
        <h4 className="p-2 pt-3">{title}</h4>
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

export default Project;
