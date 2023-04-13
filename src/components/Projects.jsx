import { projects } from "../constant";
import { Tilt } from "react-tilt";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className=" font-poppins flex items-center justify-center"
      >
        <div className="flex md:items-center items-start sm:px-20 px-5 md:h-screen">
          <div className="max-w-7xl my-20 mt-24">
            <h2 className="text-white lg:text-3xl md:text-2xl text-xl  font-extrabold uppercase text-center mb-5 ">
              Projects
              <span className="w-2 h-2 ml-[2px]  bg-slate-300 inline-block rounded-full" />
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
              {projects.map((project) => (
                <Project project={project} key={project._id}></Project>
              ))}
            </div>

            {/* {!projects && (
            <div xl={3} lg={2} md={1} sm={1} className="">
            {[1, 2, 3].map((n) => (
              <SkeletonProjects key={n} />
              ))}
              </div>
            )} */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

const Project = ({ project }) => {
  const { description, project_img, title, _id } = project;
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
        <div className="border border-white/50 rounded-sm bg-[#222] px-5 pb-5 pt-3 max-w-sm">
          <div className="w-full lg:h-56 h-40 overflow-clip">
            <img className="w-full " src={project_img} alt="" />
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
