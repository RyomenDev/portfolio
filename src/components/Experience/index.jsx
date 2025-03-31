import WorkExperience from "./workExperience/WorkExperience.jsx";
import ExperienceAccordion from "./experienceAccord/ExperienceAccord.jsx";

const Experience = ({ theme }) => {
  return (
    <>
      <ExperienceAccordion theme={theme} />
      <WorkExperience theme={theme} />
    </>
  );
};

export default Experience;
