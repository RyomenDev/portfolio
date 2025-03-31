
import "./Experience.css";
import { experience } from "../../../editable-stuff/config.js";
import { motion } from "framer-motion";
import ExperienceImg from "./ExperienceImg";

const Experience = ({ theme }) => {
// const Experience = () => {
  return (
    <div className="experience-main">
      <div className="basic-experience">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="experience-heading-div"
        >
          <div className="experience-heading-img-div">
            <ExperienceImg theme={theme} />
            {/* <ExperienceImg /> */}
          </div>
          <div className="experience-heading-text-div">
            <h1
              className="experience-heading-text"
                style={{ color: theme.text }}
            >
              {experience.title}
            </h1>
            <h3
              className="experience-heading-sub-text"
                style={{ color: theme.text }}
            >
              {experience.subtitle}
            </h3>
            <p
              className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
            >
              {experience.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
