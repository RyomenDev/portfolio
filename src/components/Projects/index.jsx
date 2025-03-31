import ProjectDetails from "./projects/Project.jsx";
import ExperienceAccord from "./projectsAccord/Projects.jsx";
import { repos } from "../../editable-stuff/config";

const Experience = ({ theme }) => {
  return (
    <>
      <ExperienceAccord theme={theme} />
      <ProjectDetails
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specific={repos.specificRepos}
      />
    </>
  );
};

export default Experience;
