import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { Container, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "./DisplayLottie";
import emoji from "react-easy-emoji";
import codingAnimation from "../../lottie/skills/fullstack.json";

const Skills = ({ skillsSection }) => {
  return (
    skillsSection && (
      <Container className="text-center my-5 section section-lg">
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-5"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skillsSection.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillsSection.subTitle}
        </motion.p>
        {skillsSection.data.map((section, index) => {
          return (
            <motion.div
              className="my-10 flex border border-gray-50 rounded-lg shadow-lg p-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex justify-center items-center">
                  <DisplayLottie animationData={codingAnimation} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {section.title}
                  </h3>
                  <div className="flex justify-center flex-wrap mb-4">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="bg-white border-2 border-blue-600 hover:bg-blue-600 hover:border-white rounded-full shadow-sm m-2 flex items-center justify-center w-16 h-16 transition-all duration-300"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false" />
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/\s/g, "")}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return (
                        <p key={i} className="text-gray-700">
                          {skill}
                        </p>
                      );
                    })}
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
