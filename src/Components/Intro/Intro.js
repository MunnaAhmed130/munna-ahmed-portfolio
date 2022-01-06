import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Intro.css';
import { Button } from '@mui/material';
import { Fade } from 'react-reveal';

const Intro = () => {
    return (
        <div className="header">
            <Row style={{ width: '100%' }} className="intro-row">
                <Col lg={5} md={12} className="left">
                    <div className="profile-img-container">
                        <Fade left>
                            <img className="profile-img" src="https://i.ibb.co/yhFgYJ9/received-641280323297589.jpg" alt="" />
                        </Fade>
                    </div></Col>
                <Col lg={7} md={12} className="right">
                    <div className="profile-info">
                        <div>
                            <h1>Munna Ahmed</h1>
                            <h3 className="title">Junior web developer</h3>
                            <p>Junior Web Developer with one year of experience in web development, designing and developing user  interfaces, testing, and debugging. Experienced in developing dynamic and responsive web applications  using web technologies like Html, CSS, Bootstrap, and Javascript. </p>
                            <Button variant='contained' className="download-btn" href="https://drive.google.com/u/0/uc?id=1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy&export=download" ><FontAwesomeIcon icon={faDownload} className="me-2" /> Download Resume</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Intro;