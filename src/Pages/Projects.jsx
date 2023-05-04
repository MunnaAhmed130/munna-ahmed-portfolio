import Footer from "../components/shared/Footer";
import Project from "../components/project/Project";
import { styles } from "../styles";
import { useLoaderData } from "react-router-dom";
import Dot from "../components/shared/Dot";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = useLoaderData();
  const dot = "";

  return (
    <div className={`relative  flex flex-col justify-between `}>
      <section
        className={` font-poppins n xs:flex flex-col items-center justify-around lg:h-[calc(100vh-92px)]  lg:min-h-[400px] `}
      >
        <div className={` ${styles.flexCenter} sm:px-20 px-5 py-10`}>
          <div className="max-w-7xl w-full ">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="uppercase text-gray-200 text-center  sm:text-sm text-xs tracking-widest  mb-2">
                My work
              </h3>
              <h2 className="text-white lg:text-3xl sm:text-[1.625rem] text-2xl font-extrabold uppercase text-center mb-5 ">
                Projects
                <Dot />
              </h2>
            </motion.div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <Project project={project} index={index} key={project._id} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80 */}
      {/* https://i.ibb.co/LhnpYXk/laptop-keyboard-tiny.jpg */}
      {/* https://i.ibb.co/6bR5Bc4/laptop-y-tiny.jpg */}
      <div
        className={`absolute  inset-0 md:bg-[url('https://i.ibb.co/LhnpYXk/laptop-keyboard-tiny.jpg')] bg-[url('https://i.ibb.co/6bR5Bc4/laptop-y-tiny.jpg')] w-full h-full z-[-1] bg-no-repeat   bg-cover md:bg-center bg-top opacity-40  transition-all duration-300 `}
      />
    </div>
  );
};

export default Projects;
