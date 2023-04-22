// import { BsGithub } from "react-icons/bs";
import { projects } from "../constant";
import { Tilt } from "react-tilt";
import Footer from "../components/Footer";
import { styles } from "../styles";
import Ripple from "../components/button/Ripple";

const Projects = () => {
  const dot = "lg:w-2 lg:h-2 md:w-[6px] md:h-[6px] w-1 h-1 ml-[2px]";

  return (
    <div className={`flex flex-col justify-between ${styles.pageHeight}`}>
      <section
        id="projects"
        className={` font-poppins xs:flex flex-col items-center justify-around lg:h-[calc(100vh-92px)]  lg:min-h-[400px] `}
      >
        <div className={` ${styles.flexCenter} sm:px-20 px-5 py-10`}>
          <div className="max-w-7xl w-full ">
            <h2 className="text-white lg:text-3xl text-2xl font-extrabold uppercase text-center mb-5 ">
              Projects
              <span
                className={`${dot} rounded-full inline-block bg-[#26bee4] `}
              />
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <Project project={project} key={project._id}></Project>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const Project = ({ project }) => {
  const {
    description,
    project_img,
    title,
    _id,
    client_repo,
    server_repo,
    live_link,
  } = project;

  const info = description.slice(0, 120);

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

  const handleClient = (repo, time) => {
    setTimeout(() => {
      window.open(repo, "_blank");
    }, time);
  };
  const imgBefore =
    "before:content-[''] before:inset-0 before:absolute before:w-full before:h-full before:bg-white before:z-10 hover:before:";
  return (
    <div className="mx-auto">
      <Tilt options={defaultOptions}>
        <div className="relative border border-white/[0] rounded-sm px-5 pb-5 pt-3 md:max-w-full max-w-sm   bg-[rgba(255,255,255,0.1)]">
          <div className="w-full  relative  overflow-hidden">
            <a href={live_link} target="_blank" className="relative">
              <img
                className="project-img  w-full xl:h-56 h-56 object-cover object-top  overflow-hidden "
                src={project_img}
                alt={`${title}-homepage`}
              />
              <div className="absolute inset-0 w-full h-full hover:bg-black/70 transition-all duration-300 text-white flex items-center justify-center opacity-0 hover:opacity-100 font-bold">
                Live Site
              </div>
            </a>
            {/* <a href={client_repo} target="_blank">
            <BsGithub className="absolute top-0 right-0  text-white bg-[#222222] xl:w-10 xl:h-10 md:w-10 md:h-10 lg:w-9 lg:h-9 w-9 h-9 p-2 xl:m-3 m-2 rounded-full z-10" />
          </a> */}
          </div>
          <div className="mt-3">
            <h4 className="text-white font-semibold text-[19px]">{title}</h4>
            <p className="text-slate-200 text-sm tracking-wider">{info}...</p>
            {/* <Link to={`/details/${_id}`}>
            <button className="mb-3 text-white">Explore</button>
          </Link> */}
            <div className="flex flex-row items-center justify-center gap-5 mt-4">
              <a target="_blank" onClick={() => handleClient(client_repo, 200)}>
                <Ripple className="text-white uppercase text-xs tracking-widest px-4 py-2 border border-white/5 rounded-sm bg-white/10 hover:shadow-md hover:shadow-black transition-shadow duration-300 ease-out">
                  client
                </Ripple>
              </a>
              <a target="_blank" onClick={() => handleClient(server_repo, 200)}>
                <Ripple className="text-white uppercase text-xs tracking-widest px-4 py-2 border border-white/5 rounded-sm bg-white/10 hover:shadow-md hover:shadow-black transition-shadow duration-300 ease-out ">
                  server
                </Ripple>
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://i.ibb.co/gt5Stzd/paper-on-bg.jpg')] bg-cover opacity-[.1] z-[-1]"></div>
        </div>
      </Tilt>
    </div>
  );
};

export default Projects;
