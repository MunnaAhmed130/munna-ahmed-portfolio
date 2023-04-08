import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFacebookF,
  faEnvelope,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer ">
      <div>
        <Row className="icon-row">
          <Col className="icon-col">
            <div className="icon-container">
              <a href="https://www.facebook.com/munnaahmed20/">
                {/* <FontAwesomeIcon icon={faFacebookF} className="footer-icon" /> */}
              </a>
            </div>
          </Col>
          <Col className="icon-col">
            <div className="icon-container">
              <a href="https://www.linkedin.com/in/munnaahmed01/">
                {/* <FontAwesomeIcon icon={faLinkedin} className="footer-icon" /> */}
              </a>
            </div>
          </Col>
          <Col className="icon-col">
            <div className="icon-container">
              <a href="mailto:munnaahmed2025@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              </a>
            </div>
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
        <p>
          Copyrights <small>2021</small>-Munna Ahmed
        </p>
      </div>
    </div>
  );
};

export default Footer;
