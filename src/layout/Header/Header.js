import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const navStyle =
  "uppercase  tracking-widest hover:text-white transition-colors";
const Header = () => {
  return (
    <nav className="w-full  px-20 py-4 text-center bg-[#1d1c1c]/95 fixed top-0  font-poppins text-slate-400 z-10">
      {/* <Link to="/" className={navStyle}>
        Home
      </Link> */}
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-10 ">
        <a href="#" className={navStyle}>
          Projects
        </a>
        <a href="#" className={navStyle}>
          Contact
        </a>
        <a href="#" className={navStyle}>
          About Me
        </a>
        <a
          href="https://drive.google.com/file/d/1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className={navStyle}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
