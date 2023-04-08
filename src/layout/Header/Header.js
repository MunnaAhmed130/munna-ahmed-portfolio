import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// const navStyle = {
//   color: "black",
// };
const Header = () => {
  return (
    <nav>
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
