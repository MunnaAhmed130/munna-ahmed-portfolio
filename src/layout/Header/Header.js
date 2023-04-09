import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { navLinks } from "../../constant";

const navStyle =
  "uppercase  tracking-widest hover:text-white transition-colors";
const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full  px-20 py-4 text-center bg-[#1d1c1c]/95 fixed top-0  font-poppins text-slate-400 z-10">
      <div className="max-w-7xl  mx-auto">
        <ul className=" flex flex-row items-center justify-end gap-20">
          {navLinks.map((link) => (
            <li>
              <a href={`#${link.id}`} className={navStyle}>
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className={navStyle}
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden">
          <ul className=" flex flex-row items-center justify-end gap-20">
            {navLinks.map((link) => (
              <li>
                <a href={`#${link.id}`} className={navStyle}>
                  {link.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://drive.google.com/file/d/1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className={navStyle}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
