import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SkeletonElement from '../../Skeletons/SkeletonElement';
import SkeletonProjects from '../../Skeletons/SkeletonProjects';
import './Project.css'

const Project = ({ project }) => {
    const { description, project_img, title, _id } = project;
    return (
        <>
            <Col xl={4} lg={6} className="project-container-col">
            <div className="project-container">
                <img className="project-img " src={project_img} alt="" />
                <h4 className="p-2 pt-3">{title}</h4>
                    <p className='description' >{description}</p>
                    <Link to={`/details/${_id}`}><Button variant='contained' className="mb-3">Explore</Button></Link>
            </div>
            </Col>


        </>
    );
};

export default Project;