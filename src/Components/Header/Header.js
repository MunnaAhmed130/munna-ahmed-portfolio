import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const navStyle = {
    color: 'black'
}
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href=""></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="m-auto">
                            <Nav.Link as={HashLink} style={navStyle} to='/home'>Home</Nav.Link>
                            <Nav.Link as={HashLink} style={navStyle} to='/projects'>Projects</Nav.Link>
                            <Nav.Link as={HashLink} style={navStyle} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={HashLink} style={navStyle} to='/contact'>Contact</Nav.Link>
                            <Nav.Link as={HashLink} style={navStyle} to='/aboutMe'>About Me</Nav.Link>
                            <Nav.Link href="https://drive.google.com/file/d/1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy/view?usp=sharing" target="_blank">Resume</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;