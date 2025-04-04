import React, { Fragment, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Container, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "./DisplayLottie";
import codingAnimation from "../../../lottie/skills/fullstack.json";

const Skills = ({ skillsSection }) => {
  const [iconOrder, setIconOrder] = useState([]);
  const [visibleCounts, setVisibleCounts] = useState([]); // Tracks visible icons per section

  // On component mount, initialize icon order and visible count per section (default 10)
  useEffect(() => {
    if (skillsSection?.data) {
      const allSkills = skillsSection.data.map(
        (section) => section.softwareSkills
      );
      setIconOrder(allSkills);
      setVisibleCounts(allSkills.map((arr) => Math.min(10, arr.length)));
    }
  }, [skillsSection]);

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

  // Function to show more icons in a given section
  const handleShowMore = (sectionIndex) => {
    setVisibleCounts((prevVisibleCounts) => {
      const newCounts = [...prevVisibleCounts];
      const totalIcons = iconOrder[sectionIndex].length;
      newCounts[sectionIndex] = Math.min(
        totalIcons,
        newCounts[sectionIndex] + 10
      );
      return newCounts;
    });
  };

  // Function to reset visible icons to initial count (10)
  const handleShowLess = (sectionIndex) => {
    setVisibleCounts((prevVisibleCounts) => {
      const newCounts = [...prevVisibleCounts];
      newCounts[sectionIndex] = 10;
      return newCounts;
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      {skillsSection && (
        <Container className="text-center w-full my-5 section section-l">
          {skillsSection.data.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              className="my-10 flex " //border border-gray-50 rounded-lg shadow-lg p-4 bg-gray-50
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="flex justify-center items-center">
                  <DisplayLottie animationData={codingAnimation} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {section.title}
                  </h3>
                  <div className="flex justify-center flex-wrap mb-4">
                    {iconOrder[sectionIndex]
                      ?.slice(0, visibleCounts[sectionIndex])
                      .map((skill, i) => (
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
                            transition={{ timeout: 200 }}
                            transitionTimeout={200}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      ))}
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    {iconOrder[sectionIndex] &&
                      visibleCounts[sectionIndex] <
                        iconOrder[sectionIndex].length && (
                        <button
                          onClick={() => handleShowMore(sectionIndex)}
                          className="mt-0 mb-2 text-sm text-blue-600 hover:underline"
                        >
                          Show More
                        </button>
                      )}
                    {iconOrder[sectionIndex] &&
                      visibleCounts[sectionIndex] > 10 && (
                        <button
                          onClick={() => handleShowLess(sectionIndex)}
                          className="mt-0 mb-2 text-sm text-blue-600 hover:underline"
                        >
                          Show Less
                        </button>
                      )}
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
          ))}
        </Container>
      )}
    </div>
  );
};

export default Skills;

// import { Icon } from "@iconify/react";
// import React, { Fragment, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Container, UncontrolledTooltip } from "reactstrap";
// import DisplayLottie from "./DisplayLottie";
// import codingAnimation from "../../lottie/skills/fullstack.json";

// const Skills = ({ skillsSection }) => {
//   const [iconOrder, setIconOrder] = useState([]);
//   const [visibleCounts, setVisibleCounts] = useState([]);

//   // On component mount, initialize the icon order
//   useEffect(() => {
//     if (skillsSection?.data) {
//       const allSkills = skillsSection?.data?.map(
//         (section) => section.softwareSkills
//       );
//       setIconOrder(allSkills);
//     }
//   }, [skillsSection]);

//   // Function to rotate the icons in each section
//   const rotateIcons = () => {
//     setIconOrder((prevIconOrder) => {
//       return prevIconOrder?.map((sectionSkills) => {
//         const rotatedSkills = [...sectionSkills.slice(1), sectionSkills[0]]; // Rotate the first icon to the last position
//         return rotatedSkills;
//       });
//     });
//   };

//   // Automatically rotate icons every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(rotateIcons, 3000); // Adjust time as needed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full flex justify-center items-center">
//       {skillsSection && (
//         <Container className="text-center w-full my-5 section section-l">
//           {skillsSection?.data?.map((section, sectionIndex) => {
//             return (
//               <motion.div
//                 className="my-10 flex border border-gray-50 rounded-lg shadow-lg p-4 bg-gray-50"
//                 key={sectionIndex}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2  w-full">
//                   <div className="flex justify-center items-center">
//                     <DisplayLottie animationData={codingAnimation} />
//                   </div>
//                   <div className="flex flex-col justify-center">
//                     <h3 className="text-2xl font-semibold mb-2">
//                       {section?.title}
//                     </h3>
//                     <div className="flex justify-center flex-wrap mb-4">
//                       {iconOrder[sectionIndex]?.map((skill, i) => {
//                         return (
//                           <Fragment key={i}>
//                             <motion.div
//                               className="bg-white border-2 border-blue-600 hover:bg-blue-600 hover:border-white rounded-full shadow-sm m-2 flex items-center justify-center w-16 h-16 transition-all duration-300"
//                               id={skill?.skillName.replace(/\s/g, "")}
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               transition={{ duration: 0.5, delay: i * 0.1 }}
//                             >
//                               <Icon
//                                 icon={skill?.iconifyTag}
//                                 data-inline="false"
//                               />
//                             </motion.div>
//                             <UncontrolledTooltip
//                               delay={0}
//                               placement="bottom"
//                               target={skill?.skillName.replace(/\s/g, "")}
//                               //   timeout={200}
//                               transition={{ timeout: 200 }}
//                               transitionTimeout={200}
//                             >
//                               {skill?.skillName}
//                             </UncontrolledTooltip>
//                           </Fragment>
//                         );
//                       })}
//                     </div>
//                     <div>
//                       {section.skills.map((skill, i) => (
//                         <p key={i} className="text-gray-700 flex text-left">
//                           <span className="mr-2">{skill?.emoji}</span>
//                           {skill?.text}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </Container>
//       )}
//     </div>
//   );
// };

// export default Skills;
