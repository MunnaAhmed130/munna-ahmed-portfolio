import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer2 from '../Footer2/Footer2';
import './Details.css'

const Details = () => {
    const { _id } = useParams();
    // const [details, setDetails] = useState(null);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://munna-ahmed-porfolio-server.herokuapp.com/portfolio/${_id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details)
    // const { title, project_demo_1, project_demo_2, project_demo_3, github_client_repo, github_server_repo, live_link, p_1, p_2, p_3 } = details;

    return (
        <div className="details">
            <Row className="details-row">
                <Col lg={4} className="project-demo-col" >
                    <div className="project-demo-container"><img src={details.project_demo_1} className="project-demo skeleton" alt="" /></div></Col>
                <Col lg={4} className="project-demo-col" >
                    <div className="project-demo-container"><img src={details.project_demo_2} className="project-demo" alt="" /></div></Col>
                <Col lg={4} className="project-demo-col" >
                    <div className="project-demo-container"><img src={details.project_demo_3} className="project-demo" alt="" /></div></Col>

            </Row>
            <h3>{details.title}</h3>
            <ul className="list">
                <li>{details.p_1}</li>
                <li>{details.p_2}</li>
                <li>{details.p_3}</li>
            </ul>
            <Button className=" link-btn"><a href={details.github_client_repo} target="_blank" rel="noopener noreferrer" alt="">Github client repo</a></Button>
            {details.github_server_repo &&
                <Button className=" link-btn"><a href={details.github_server_repo} target="_blank" rel="noopener noreferrer">Github server repo</a></Button>}
            <Button className="link-btn"><a href={details.live_link} target="_blank" rel="noopener noreferrer">Live site</a></Button>
            <Footer2 />
        </div>
    );
};

export default Details;