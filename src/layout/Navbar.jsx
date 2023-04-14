import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../constant";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import useAll from "../hooks/useAll";

const Navbar = () => {
  const [headerStyle, setHeaderStyle] = useState();
  const { toggle, setToggle } = useAll();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    location.pathname.includes("projects") && setHeaderStyle(true);
    !location.pathname.includes("projects") && setHeaderStyle(false);
  }, [location, setHeaderStyle]);
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
    <nav
      className={`${
        headerStyle ? "lg:fixed " : " fixed "
      } w-full  sm:px-20 px-5 py-4 text-center top-0  font-poppins  z-10`}
    >
      <div className="max-w-7xl w-full  mx-auto flex justify-between items-center">
        <Link to="/" className=" text-white text-2xl font-bold">
          Munna
          <span className="w-1 h-1 bg-gray-400 inline-block rounded-full" />
        </Link>
        {/* list of links  */}
        <ul className="hidden md:flex flex-row  gap-10">
          <NavList />
        </ul>

        <div className="md:hidden relative flex items-center justify-end">
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
  const { toggle, setToggle } = useAll();
  const [active, setActive] = useState("");
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          {path.includes(link.id) ? (
            <Link
              to="/"
              className={` text-gray-400
               nav-link`}
              onClick={() => {
                setActive(link.id);
                setToggle(!toggle);
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
                setToggle(!toggle);
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
