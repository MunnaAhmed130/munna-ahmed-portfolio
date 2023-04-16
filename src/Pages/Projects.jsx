import { BsGithub } from "react-icons/bs";
import { projects } from "../constant";
import { Tilt } from "react-tilt";
import Footer from "../components/Footer";

const Projects = () => {
  const flexCenter = "flex items-center justify-center";
  const dot = "lg:w-2 lg:h-2 md:w-[6px] md:h-[6px] w-1 h-1 ml-[2px]";
  return (
    <>
      <section id="projects" className={`${flexCenter} font-poppins `}>
        <div className="flex md:items-center items-start sm:px-20 px-5 md:h-screen md:m-0 mb-5 mt-10">
          <div className="max-w-7xl w-full">
            <h2 className="text-white lg:text-3xl md:text-2xl text-xl  font-extrabold uppercase text-center mb-5 ">
              Projects
              <span
                className={`${dot} rounded-full inline-block   bg-slate-400 `}
              />
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
              {projects.map((project) => (
                <Project project={project} key={project._id}></Project>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const Project = ({ project }) => {
  const { description, project_img, title, _id, client_repo } = project;
  const info = description.slice(0, 170);

  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.1,1,.1,.99)", // Easing on enter/exit.
  };

  return (
    <div className="m-2 ">
      <Tilt options={defaultOptions}>
        <div className="border border-white/30 rounded-sm px-5 pb-5 pt-3 max-w-sm bg-[rgba(255,255,255,0.04)]">
          <div className="w-full xl:h-56 h-40 relative  overflow-hidden">
            <img
              className="w-full h-auto object-cover  overflow-hidden hover:before:content-['Live Site'] hover:before:inset-0"
              src={project_img}
              alt=""
            />
            <a href={client_repo} target="_blank">
              <BsGithub className="absolute top-0 right-0  text-white bg-[#222222] w-8 h-8 p-2 m-2 rounded-full" />
            </a>
          </div>
          <div className="mt-3">
            <h4 className="text-white font-semibold text-lg">{title}</h4>
            <p className="text-slate-200 text-sm tracking-wider">{info}...</p>
            {/* <Link to={`/details/${_id}`}>
            <button className="mb-3 text-white">Explore</button>
          </Link> */}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Projects;
