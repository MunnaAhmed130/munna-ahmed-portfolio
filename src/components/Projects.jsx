import { projects } from "../constant";
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
  return (
    <div className="m-2 ">
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
    </div>
  );
};

export default Projects;
