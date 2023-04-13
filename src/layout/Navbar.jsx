import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../constant";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import useAll from "../hooks/useAll";

const Navbar = () => {
  const { setFast } = useAll();
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const variants = {
    open: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    closed: { opacity: 0, y: "-20%" },
  };

  // bg-[#1d1c1c]/95
  // const handleToTop = () => {
  //   window.scrollTo(0, 0);
  //   setActiveSection("");
  //   navigate("/");
  // };

  return (
    <nav className="w-full  sm:px-20 px-5 py-4 text-center  fixed top-0  font-poppins  z-10">
      <div className="max-w-7xl w-full  mx-auto flex justify-between items-center">
        <Link to="/" className=" text-white text-2xl font-bold">
          Munna
          <span className="w-1 h-1 bg-gray-400 inline-block rounded-full" />
        </Link>
        {/* list of links  */}
        <ul className="hidden sm:flex flex-row  gap-10">
          <NavList />
        </ul>

        <div className="sm:hidden relative flex items-center justify-end">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-3xl text-slate-400"
          >
            {toggle ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>

          <motion.div
            animate={toggle ? "open" : "closed"}
            variants={variants}
            className={`${toggle ? "absolute" : "hidden"}  top-10 `}
          >
            {/* list of links  */}
            <ul className="   flex flex-col items-center justify-end gap-2">
              <NavList />
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const NavList = () => {
  const [active, setActive] = useState("");
  const location = useLocation();
  console.log(location);
  location.pathname.includes("projects") && console.log("includes project");

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          {location.pathname.includes(link.id) ? (
            <Link
              to="/"
              className={` text-gray-400
               nav-link`}
              onClick={() => {
                setActive(link.id);
              }}
            >
              Home
            </Link>
          ) : (
            <Link
              to={`${link.id}`}
              className={` text-gray-400
               nav-link`}
              onClick={() => {
                setActive(link.id);
              }}
            >
              {link.title}
            </Link>
          )}
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

export default Navbar;
