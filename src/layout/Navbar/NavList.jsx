import React from "react";
import { navLinks } from "../../utils/constant";
import { NavLink, useLocation } from "react-router-dom";
import useAll from "../../hooks/useAll";

const NavList = () => {
  const { toggle, setToggle } = useAll();
  const location = useLocation();
  const path = location.pathname;
  // console.log(location);

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={`${link.id}`}
            className={({ isActive }) =>
              isActive ? `text-gray-300 nav-link` : `text-gray-400 nav-link`
            }
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
      <li>
        <a
          href="https://drive.google.com/file/d/1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className={`nav-link hover:text-slate-300 text-gray-400`}
        >
          Resume
        </a>
      </li>
    </>
  );
};

export default NavList;
