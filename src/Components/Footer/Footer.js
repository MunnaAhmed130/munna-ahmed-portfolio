import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import { faFacebook, faFacebookSquare, faLinkedin, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="footer ">
                <div>
                    <Row className='icon-row'>
                        <Col>
                            <a href="https://www.facebook.com/munnaahmed20/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                        </Col>
                        <Col>
                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        </Col>
                        <Col>
                            <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
                        </Col>
                    </Row>
                    {/* <ul>
                        <li>
                            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
                        </li>
                        <li>
                            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                        <li>
                            <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
                        </li>
                    </ul> */}
                </div>
                <div>
                    <p>Copyrights <small>2021</small>-Munna Ahmed</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;