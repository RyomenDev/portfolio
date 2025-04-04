import "./SoftwareSkill.css";
import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, UncontrolledTooltip } from "reactstrap";
import { Icon } from "@iconify/react";

const SoftwareSkill = ({ logos }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [iconOrder, setIconOrder] = useState([]);

  // Function to rotate the icons in each section
  const rotateIcons = () => {
    setIconOrder((prevIconOrder) =>
      prevIconOrder?.map((sectionSkills) => {
        const rotatedSkills = [...sectionSkills.slice(1), sectionSkills[0]];
        return rotatedSkills;
      })
    );
  };

  // Automatically rotate icons every 3 seconds
  useEffect(() => {
    const interval = setInterval(rotateIcons, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="software-skills-main-div">
      <div className="flex justify-center flex-wrap mb-4">
        {logos?.map((logo, i) => (
          <li
            key={logo.skillName}
            className="relative software-skill-inline cursor-pointer"
            onMouseEnter={() => setHoveredSkill(logo.skillName)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <Fragment key={i}>
              <motion.div
                className="bg-white border-2 border-blue-600 hover:bg-blue-600 hover:border-white rounded-full shadow-sm m-2 flex items-center justify-center w-16 h-16 transition-all duration-300"
                id={logo.skillName.replace(/\s/g, "")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* <Icon icon={skill.iconifyTag} data-inline="false" /> */}
                {logo.fontAwesomeClassname && (
                  <span
                    className="iconify text-3xl"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                    alt={logo.skillName}
                    title="HTML5"
                  ></span>
                )}
              </motion.div>
              {/* <UncontrolledTooltip
              delay={0}
              placement="bottom"
              target={logo.skillName.replace(/\s/g, "")}
              transition={{ timeout: 200 }}
              transitionTimeout={200}
            >
              {logo.skillName}
            </UncontrolledTooltip> */}
              {/* Tooltip */}
              {hoveredSkill === logo.skillName && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm rounded-md bg-gray-700 text-white shadow-lg z-10 whitespace-nowrap">
                  {logo.skillName}
                </div>
              )}
            </Fragment>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SoftwareSkill;
