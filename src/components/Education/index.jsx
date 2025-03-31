import EducationDetails from "./education/Education.jsx";
import EducationAccord from "./educationAccord/EducationAccord.jsx";

const Education = ({ theme }) => {
  return (
    <>
      <EducationAccord theme={theme} />
      <EducationDetails />
    </>
  );
};

export default Education;
