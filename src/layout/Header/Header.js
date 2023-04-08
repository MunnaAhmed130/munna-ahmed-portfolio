import React from "react";
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import "./Header.css";
import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const navStyle = {
  color: "black",
};
const Header = () => {
  return (
    <nav>
      {/* <Nav.Link to='/home'>Home</Nav.Link>
                        <Nav.Link to='/projects'>Projects</Nav.Link>
                        <Nav.Link to="/blogs">Blogs</Nav.Link>
                        <Nav.Link to='/contact'>Contact</Nav.Link>
                        <Nav.Link to='/aboutMe'>About Me</Nav.Link> */}
      <Link to="/" className="bg-slate-200">
        Home
      </Link>
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
    </nav>
  );
};

export default Header;
