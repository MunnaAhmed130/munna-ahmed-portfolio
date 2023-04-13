import { projects } from "../constant";

const Projects = () => {
  return (
    <section data-section id="projects" className=" relative z-0 font-poppins">
      <div className="flex items-center justify-center  h-screen">
        <div className="max-w-7xl">
          <h2 className="text-white text-3xl font-extrabold uppercase text-center mb-5 ">
            Projects
          </h2>
          <div className="grid sm:grid-cols-3 ">
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
  );
};

const Project = ({ project }) => {
  const { description, project_img, title, _id } = project;
  const info = description.slice(0, 170);
  return (
    <div className="m-2">
      <div className="border border-white/50 rounded-sm px-5 pb-5 pt-3">
        <div className="w-full h-56 overflow-clip">
          <img className="w-full " src={project_img} alt="" />
        </div>
        <div className="mt-3">
          <h4 className="text-white font-semibold text-lg">{title}</h4>
          <p className="text-slate-200">{info}...</p>
          {/* <Link to={`/details/${_id}`}>
            <button className="mb-3 text-white">Explore</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
