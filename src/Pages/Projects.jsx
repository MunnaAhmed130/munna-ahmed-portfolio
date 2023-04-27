import Footer from "../components/shared/Footer";
import Project from "../components/project/Project";
import { styles } from "../styles";
import { useLoaderData } from "react-router-dom";
import Dot from "../components/shared/Dot";

const Projects = () => {
  const projects = useLoaderData();
  const dot = "";

  return (
    <div
      className={`relative flex flex-col justify-between ${styles.pageHeight}`}
    >
      <section
        className={` font-poppins n xs:flex flex-col items-center justify-around lg:h-[calc(100vh-92px)]  lg:min-h-[400px] `}
      >
        <div className={` ${styles.flexCenter} sm:px-20 px-5 py-10`}>
          <div className="max-w-7xl w-full ">
            <h3 className="sub-title">My work</h3>
            <h2 className="text-white lg:text-3xl text-2xl font-extrabold uppercase text-center mb-5 ">
              Projects
              {/* <Dot /> */}
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Project project={project} key={project._id} />
              ))}
            </div>
          </div>
        </div>
        {/* <div
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')]   w-full h-full  z-[-1] bg-no-repeat opacity-70  bg-[length:2000px] sm:bg-center  bg-top  hiddensm:inline-block  transition-all duration-300 `}
      /> */}
        {/* <div
          className={`absolute inset-0 bg-[url('https://i.ibb.co/fdSPwVx/gradience-1.jpg')]   w-full h-full  z-[-2] bg-repeat opacity-30  bg-cover bg-center   transition-all duration-300 `}
        /> */}
      </section>

      <Footer />
      <div
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')]   w-full h-full  z-[-1] bg-no-repeat opacity-70 bg-cover  sm:bg-center  bg-center  hiddensm:inline-block  transition-all duration-300 `}
      />
    </div>
  );
};

export default Projects;
