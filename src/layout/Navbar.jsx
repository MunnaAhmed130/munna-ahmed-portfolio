import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import useAll from "../hooks/useAll";
import { navLinks } from "../constant";

const Navbar = () => {
  const { toggle, setToggle } = useAll();

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
  // bg-[#626beb]
  return (
    <nav className="w-full relative  sm:px-20 px-5 py-4 text-center top-0 font-poppins z-20">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link to="/" className=" text-white text-2xl font-bold">
          Munna
          <span className="sm:w-1.5 sm:h-1.5 w-1 h-1 bg-blue-500 inline-block rounded-full" />
        </Link>
        {/* list of links  */}
        <ul className="hidden md:flex flex-row  gap-10">
          <NavList />
        </ul>

        <div className="md:hidden relative flex flex-row items-center justify-end">
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
            <ul className="flex flex-col items-center justify-end gap-2">
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
  const location = useLocation();
  const path = location.pathname;
  // console.log(location.pathname.length);
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

export default Navbar;
