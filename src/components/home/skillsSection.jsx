import { Icon } from "@iconify/react";
import React, { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "./DisplayLottie";
import codingAnimation from "../../lottie/skills/fullstack.json";

const Skills = ({ skillsSection }) => {
  const [iconOrder, setIconOrder] = useState([]);

  // On component mount, initialize the icon order
  useEffect(() => {
    if (skillsSection?.data) {
      const allSkills = skillsSection.data.map(
        (section) => section.softwareSkills
      );
      setIconOrder(allSkills);
    }
  }, [skillsSection]);

  // Function to rotate the icons in each section
  const rotateIcons = () => {
    setIconOrder((prevIconOrder) => {
      return prevIconOrder.map((sectionSkills) => {
        const rotatedSkills = [...sectionSkills.slice(1), sectionSkills[0]]; // Rotate the first icon to the last position
        return rotatedSkills;
      });
    });
  };

  // Automatically rotate icons every 3 seconds
  useEffect(() => {
    const interval = setInterval(rotateIcons, 3000); // Adjust time as needed
    return () => clearInterval(interval);
  }, []);

  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg">
        {skillsSection.data.map((section, sectionIndex) => {
          return (
            <motion.div
              className="my-10 flex border border-gray-50 rounded-lg shadow-lg p-4 bg-gray-50"
              key={sectionIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2  w-full">
                <div className="flex justify-center items-center">
                  <DisplayLottie animationData={codingAnimation} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {section.title}
                  </h3>
                  <div className="flex justify-center flex-wrap mb-4">
                    {iconOrder[sectionIndex]?.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <motion.div
                            className="bg-white border-2 border-blue-600 hover:bg-blue-600 hover:border-white rounded-full shadow-sm m-2 flex items-center justify-center w-16 h-16 transition-all duration-300"
                            id={skill.skillName.replace(/\s/g, "")}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false" />
                          </motion.div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, "")}
                            timeout={200}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => (
                      <p key={i} className="text-gray-700 flex text-left">
                        <span className="mr-2">{skill.emoji}</span>
                        {skill.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </Container>
    )
  );
};

export default Skills;


