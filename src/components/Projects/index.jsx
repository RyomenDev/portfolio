import ExperienceAccord from "./projectsAccord/Projects.jsx";
import ProjectDetails from "./projects/projects.jsx";
// import ProjectDetails from "./projects/Project.jsx";
// import { repos } from "../../editable-stuff/config";

const Project = ({ theme }) => {
  return (
    <>
      <ExperienceAccord theme={theme} />
      <ProjectDetails />

      {/* <ProjectDetails
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specific={repos.specificRepos}
      /> */}
    </>
  );
};

export default Project;
