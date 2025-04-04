import "./card.scss";
// import "./globals.scss";
import "./projects.scss";
import { projectsData } from "../../../editable-stuff/config.js";
import ProjectCard from "./projectCard.jsx";
import { projectsHeader } from "../../../editable-stuff/config.js";

const Projects = () => {
  return (
    // <div className="border-4 border-red-600 overflow-clip">
    <div
      id="projects"
      className="relative  my-12 lg:my-24 "
      //z-50
    >
      {/* <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div> */}
      <h1 className="header-topic"> Projects</h1>
      {/* <h1 className="text-4xl md:text-6xl font-semibold text-center mb-10">
        Projects
      </h1> */}

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4)?.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto lg:max-w-6xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <a
          href={`https://github.com/${projectsHeader.username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
