import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const { _id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://munna-ahmed-porfolio-server.herokuapp.com/portfolio/${_id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details)
    const { description, project_demo_1, project_demo_2, project_demo_3, github_repo, live_link } = details;

    return (
        <div className="details">
            <Row className="details-row">
                <Col lg={4}>
                    <img src={project_demo_3} className="project-demo" alt="" /></Col>
                <Col lg={4}>
                    <img src={project_demo_2} className="project-demo" alt="" /></Col>
                <Col lg={4}>
                    <img src={project_demo_1} className="project-demo" alt="" /></Col>

            </Row>
            <p>{description}</p>
            <Button><a href={github_repo}>Github repo</a></Button>
            <Button><a href={live_link}>Live site</a></Button>
        </div>
    );
};

export default Details;