import WorkExperience from "./workExperience/WorkExperience.jsx";
import ExperienceAccord from "./experienceAccord/ExperienceAccord.jsx";

const Experience = ({ theme }) => {
  return (
    <>
      <ExperienceAccord theme={theme} />
      <WorkExperience theme={theme} />
    </>
  );
};

export default Experience;
