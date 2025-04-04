import "./SoftwareSkill.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const SoftwareSkill = ({ logos }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [iconOrder, setIconOrder] = useState([]);

  useEffect(() => {
    if (logos?.length > 0) {
      setIconOrder([logos]); // wrap in array to mimic multiple sections
    }
  }, [logos]);

  const rotateIcons = () => {
    setIconOrder((prevIconOrder) =>
      prevIconOrder.map((sectionSkills) => {
        const rotated = [...sectionSkills.slice(1), sectionSkills[0]];
        return rotated;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(rotateIcons, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="software-skills-main-div flex items-center">
      <div className="flex justify-center flex-wrap mb-4">
        {iconOrder.length > 0 &&
          iconOrder[0].map((logo, i) => (
            <div
              key={logo.skillName}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredSkill(logo.skillName)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="bg-white border-2 border-blue-600 hover:bg-blue-600 hover:border-white rounded-full shadow-sm m-2 flex items-center justify-center w-16 h-16 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Icon
                  icon={logo.fontAwesomeClassname}
                  className="text-3xl"
                  style={logo.style}
                />
              </motion.div>

              {hoveredSkill === logo.skillName && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm rounded-md bg-gray-700 text-white shadow-lg z-10 whitespace-nowrap">
                  {logo.skillName}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SoftwareSkill;
