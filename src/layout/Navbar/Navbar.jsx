import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import useAll from "../../hooks/useAll";
import NavList from "./NavList";
import "./Navbar.css";

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
          <span className="sm:w-1.5 sm:h-1.5 w-1 h-1 color-dot inline-block rounded-full" />
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
            <ul className="flex flex-col items-center justify-end gap-2 bg-white/0 py-1 px-2 rounded-sm">
              <NavList />
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
