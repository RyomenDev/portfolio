import "./Education.scss";
import EducationCard from "../educationCard/EducationCard.jsx";
import { educationInfo } from "../../../editable-stuff/config.js";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        {/* <h1 className="education-heading">Education</h1> */}
        <h1 className="text-4xl md:text-6xl text-center mb-10">
          <h1 className="header-topic"> Education</h1>
        </h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
