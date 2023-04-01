import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import SkeletonDetails from "../../Skeletons/SkeletonDetails";
import Detail from "../Detail/Detail";
import Footer from "../Footer/Footer";
import "./Details.css";

const Details = () => {
    const { _id } = useParams();
    const [details, setDetails] = useState(null);
    // const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`/fakedata.json`)
            .then((res) => res.json())
            .then((data) => setDetails(data));
    }, []);
    console.log(details);
    // const { title, project_demo_1, project_demo_2, project_demo_3, github_client_repo, github_server_repo, live_link, p_1, p_2, p_3 } = details;

    return (
        <div>
            {/* <Row className="detail-row">
                <Col lg={4} className="project-demo-col" >
                    <div className="project-demo-container"><img src={details.project_demo_1} className="project-demo " alt="" /></div></Col>
                <Col lg={4} className="project-demo-col" >
                    <div className="project-demo-container"><img src={details.project_demo_2} className="project-demo" alt="" /></div></Col>
                <Col lg={4} className="project-demo-col" >
                    <div className="project-demo-container"><img src={details.project_demo_3} className="project-demo" alt="" /></div></Col>

            </Row> */}

            {details && (
                <div className="details">
                    <Detail details={details} key={details._id}></Detail>
                </div>
            )}
            {!details && <SkeletonDetails></SkeletonDetails>}
            <Footer />
        </div>
    );
};

export default Details;
