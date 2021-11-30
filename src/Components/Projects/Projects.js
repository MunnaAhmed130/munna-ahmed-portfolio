import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Project from '../Project/Project';
import './Projects.css'

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const Url = `https://munna-ahmed-porfolio-server.herokuapp.com/portfolio`;
        fetch(Url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    console.log(project)

    return (
        <div id="projects" className="projects-container">
            <h2>Projects</h2>
            <Row className="projects">
                {
                    project.map(project => <Project project={project} key={project._id}></Project>)
                }
            </Row>
            {/* <Row className="projects">
                <Col xl={4} lg={6} className="project-img-container">
                    <img className="project-img" src="https://i.ibb.co/51CXx37/project1.png" alt="" />
                </Col>
                <Col xl={4} lg={6} className="project-img-container">
                    <img className="project-img" src="https://i.ibb.co/jvdSLm9/project2.png" alt="" />
                </Col>
                <Col xl={4} lg={6} className="project-img-container">
                    <img className="project-img" src="https://i.ibb.co/cCHWDMj/projects3.png" alt="" />
                </Col>
            </Row> */}
        </div>
    );
};

export default Projects;