import { Button } from '@mui/material';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const details = ({ details }) => {
    return (
        <div>
            <Row className="details-row g-4" >
                <Col xl={4} md={6} sm={12} className="project-demo-col" >
                    <div className="project-demo-container">
                        <a href={details.project_demo_1} target="_blank" rel="noopener noreferrer" alt="">
                            <img src={details.project_demo_1} className="project-demo " alt="" />
                        </a>
                    </div>
                </Col>
                <Col xl={4} md={6} sm={12} className="project-demo-col" >
                    <div className="project-demo-container">
                        <a href={details.project_demo_2} target="_blank" rel="noopener noreferrer" alt="">
                            <img src={details.project_demo_2} className="project-demo" alt="" />
                        </a>
                    </div>
                </Col>
                <Col xl={4} md={12} sm={12} className="project-demo-col" >
                    <div className="project-demo-container">
                        <a href={details.project_demo_3} target="_blank" rel="noopener noreferrer" alt="">
                            <img src={details.project_demo_3} className="project-demo" alt="" />
                        </a>
                    </div>
                </Col>
            </Row>
            <div>
                <h3>{details.title}</h3>
                <ul className="list">
                    <li>{details.p_1}</li>
                    <li>{details.p_2}</li>
                    <li>{details.p_3}</li>
                </ul>
            </div>
            <div>
                <a href={details.github_client_repo} className=" link-btn" target="_blank" rel="noopener noreferrer" alt="">
                    <Button variant='contained'>Github client repo</Button>
                </a>
                <a href={details.github_server_repo} className=" link-btn" target="_blank" rel="noopener noreferrer" alt="">
                    <Button variant='contained'>Github server repo</Button>
                </a>
                <a href={details.live_link} className="link-btn" target="_blank" rel="noopener noreferrer" alt="">
                    <Button variant='contained'>Live site</Button>
                </a>
            </div>
        </div>
    );
};

export default details;