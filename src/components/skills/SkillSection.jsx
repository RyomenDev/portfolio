import "./Skills.css";
import SoftwareSkill from "./skills/SoftwareSkill.jsx";
import { skills } from "../../editable-stuff/config.js";
import { motion } from "framer-motion";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

const GetSkillSvg = ({ fileName, theme }) => {
  switch (fileName) {
    case "FullStackImg":
      return <FullStackImg theme={theme} />;
    case "CloudInfraImg":
      return <CloudInfraImg theme={theme} />;
    default:
      return <DesignImg theme={theme} />;
  }
};

const SkillSection = ({ theme }) => {
  return (
    <>
      <div className="">
        {skills?.data?.map((skill, i) => (
          <div key={i} className="skills-main-div">
            <motion.div
              className="skills-image-div"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <GetSkillSvg fileName={skill?.fileName} theme={theme} />
            </motion.div>

            <div className="skills-text-div">
              <motion.h1
                className="skills-heading"
                style={{ color: theme?.text }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {skill?.title}
              </motion.h1>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <SoftwareSkill logos={skill?.softwareSkills} />
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                {skill.skills.map((skillSentence, i) => (
                  <p
                    key={i}
                    className="subTitle skills-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillSection;
