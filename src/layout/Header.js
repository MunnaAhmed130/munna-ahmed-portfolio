import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constant";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const navStyle = "tracking-widest hover:text-white transition-colors";

const Header = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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

  return (
    <nav className="w-full  sm:px-20 px-10 py-4 text-center bg-[#1d1c1c]/95 fixed top-0  font-poppins text-slate-400 z-10">
      <div className="max-w-7xl w-full  mx-auto flex justify-between items-center">
        <Link to="/" className="text-gradient text-2xl font-semibold">
          Munna
          <span className="w-1 h-1 bg-slate-500 inline-block rounded-full" />
        </Link>

        <ul className="hidden sm:flex flex-row  gap-10">
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

        <div className="sm:hidden relative flex items-center justify-end">
          <button onClick={() => setToggle(!toggle)} className="text-3xl">
            {/* {toggle ? "open" : "close"} */}
            {toggle ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
          <motion.div
            animate={toggle ? "open" : "closed"}
            variants={variants}
            className={`${toggle ? "absolute" : "hidden"}  top-10`}
          >
            <ul className="   flex flex-col items-center justify-end gap-2">
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
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
