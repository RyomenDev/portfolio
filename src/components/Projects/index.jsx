import ExperienceAccord from "./projectsAccord/Projects.jsx";
// import ProjectDetails from "./projects/projects.jsx";
import ProjectDetails from "./projectDetails/projects.jsx";


const Project = ({ theme }) => {
  return (
    <>
      <ExperienceAccord theme={theme} />
      <ProjectDetails />
    </>
  );
};

export default Project;
