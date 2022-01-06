import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Footer2 from '../Footer2/Footer2';
import Project from '../Project/Project';
import './Projects.css'

const Projects = () => {
    const [project, setProject] = useState(null);
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        const Url = `https://munna-ahmed-porfolio-server.herokuapp.com/portfolio`;
        fetch(Url)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    console.log(project)

    return (
        <div id="projects" >
            <div className="projects-container ">

                <h2>Projects</h2>
                {/* <Spinner animation="border" /> */}
                {project && <Row className="projects">
                    {
                        project.map(project => <Project project={project} key={project._id}></Project>)
                    }
                </Row>}
                {
                    !project && <div className='spin' > <Spinner animation="border" /></div>
                }
            </div>
            <Footer2 />
        </div>
    );
};

export default Projects;