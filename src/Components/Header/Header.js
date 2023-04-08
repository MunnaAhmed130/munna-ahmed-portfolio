import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import "./Header.css";

const navStyle = {
  color: "black",
};
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container className="header-container">
        <Navbar.Brand href=""></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto nav">
            {/* <Nav.Link to='/home'>Home</Nav.Link>
                        <Nav.Link to='/projects'>Projects</Nav.Link>
                        <Nav.Link to="/blogs">Blogs</Nav.Link>
                        <Nav.Link to='/contact'>Contact</Nav.Link>
                        <Nav.Link to='/aboutMe'>About Me</Nav.Link> */}
            {/* <Link to="/home">Home</Link> */}
            <a href="#">Portfolio</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
            <a href="#">About Me</a>
            <a
              href="https://drive.google.com/file/d/1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
