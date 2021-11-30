import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = ({ project }) => {
    const { description, project_img, _id } = project;
    return (
        <Col xl={4} lg={6} className="project-img-container">
            <img className="project-img" src={project_img} alt="" />
            <p>{description}</p>
            <Link to={`/details/${_id}`}><Button>Explore</Button></Link>
        </Col>
    );
};

export default Project;